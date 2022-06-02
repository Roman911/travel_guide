import React from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useLazyQuery } from '@apollo/react-hooks'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { Box, Button, Checkbox, FormControl, FormControlLabel, IconButton, Input, InputAdornment, InputLabel, Link, Snackbar, TextField } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useActions } from '../store/hooks'
import Redirect from '../hooks/useRedirect'
import { AuthLayout } from '../Components'
import { LOGIN } from '../apollo/queries/login'

enum types {
  EMAIL = 'email',
  PASSWORD = 'password'
}

const schema = yup.object().shape({
  email: yup.string().required('Поле не може бути пустим').email('Некоректний емейл'),
  password: yup.string().required().min(6, 'Мінімум 6 символів')
})

interface IFormInput {
  email: string
  password: string
}

const defaultValues = {
  email: '',
  password: ''
}

const Login: NextPage = () => {
  const router = useRouter()
  const [showPassword, setShowPassword] = React.useState(false)
  const [isDisabled, setDisabled] = React.useState(false)
  const { setData, enqueueSnackbar, linearProgress } = useActions()
  const [userData, { loading, data, error }] = useLazyQuery(LOGIN)
  const { control, handleSubmit, formState: { errors }, setError } = useForm<IFormInput>({ mode: "onTouched", defaultValues, resolver: yupResolver(schema) })

  const onSubmit: SubmitHandler<IFormInput> = data => {
    setDisabled(true)
    const { email, password } = data
    userData({ variables: { input: { email, password } } })
  }

  const handleClickShowPassword = () => setShowPassword(prev => !prev)

  React.useEffect(() => {
    if (loading) {
      linearProgress(true)
    }
    if (error) {
      enqueueSnackbar({ message: 'Неправильний логін або пароль', key: `${new Date().getTime()}+${Math.random()}` })
      setError(types.EMAIL, { type: 'custom', message: 'error' })
      setError(types.PASSWORD, { type: 'custom', message: 'error' })
      setDisabled(false)
      linearProgress(false)
    }
    if (data) {
      setData(data.login)
      localStorage.setItem('userData', JSON.stringify({ ...data.login }))
      enqueueSnackbar({ message: 'Ви успішно увійшли!', key: `${new Date().getTime()}+${Math.random()}` })
    }
  }, [error, loading, data])

  if (data) return <Redirect />

  return <AuthLayout title='Вхід' bottomText='Входячи в систему' subtitle={{ title: 'Не маєте акаунта?', btn: 'Зареєструйтеся', link: '/registration' }}>
    <Box component="form" maxWidth='360px' margin='auto' onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name={types.EMAIL}
        control={control}
        render={({ field }) => <TextField
          {...field}
          label="Ел. пошта"
          variant="standard"
          error={!!errors[types.EMAIL]}
          sx={{ width: '100%', margin: '5px 0' }}
        />}
      />
      <Controller
        name={types.PASSWORD}
        control={control}
        render={({ field }) => <FormControl
          error={!!errors[types.PASSWORD]}
          {...field}
          sx={{ width: '100%', margin: '5px 0' }}
          variant="standard"
        >
          <InputLabel htmlFor={types.PASSWORD}>Пароль</InputLabel>
          <Input
            type={showPassword ? 'text' : types.PASSWORD}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>}
      />
      <Box sx={{ margin: '20px 0' }}>
        <FormControlLabel control={<Checkbox size="small" defaultChecked color='secondary' />} label="Запам'ятати мене" />
        <Link
          component="button"
          underline="none"
          variant="body2"
          onClick={() => router.push('/registration')}
        >
          Забули пароль?
        </Link>
      </Box>
      <Button type='submit' variant="contained" sx={{ width: '140px' }} color='secondary' disabled={isDisabled}>Увійти</Button>
    </Box>
  </AuthLayout>
}

export default Login