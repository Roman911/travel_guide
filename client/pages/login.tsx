import React from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useLazyQuery } from '@apollo/react-hooks'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { Box, Button, Checkbox, FormControl, FormControlLabel, IconButton, Input, InputAdornment, InputLabel, Link, TextField } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useActions } from '../store/hooks'
import { AuthLayout } from '../Components'

const schema = yup.object().shape({
  //email: yup.string().required(errors.required).email(errors.email),
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
  const [showPassword, setShowPassword] = React.useState({ showPassword: true })

  //const { showNotification, setData, showLoading } = useActions()
  //const [userData, { loading, data, error }] = useLazyQuery(LOGIN)
  const { control, handleSubmit, formState: { errors } } = useForm<IFormInput>({ defaultValues, resolver: yupResolver(schema) })



  return <AuthLayout title='Вхід' bottomText='Входячи в систему' subtitle={{ title: 'Не маєте акаунта?', btn: 'Зареєструйтеся', link: '/registration' }}>
    <Box component="form" maxWidth='360px' margin='auto' onChange={() => console.log('Change')}>
      <TextField id="email" label="Ел. пошта" variant="standard" sx={{ width: '100%', margin: '5px 0' }} />
      <FormControl sx={{ width: '100%', margin: '5px 0' }} variant="standard">
        <InputLabel htmlFor="password">Пароль</InputLabel>
        <Input
          id="password"
          type={showPassword ? 'text' : 'password'}
          //value={values.password}
          //onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
              //onClick={handleClickShowPassword}
              //onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
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
      <Button variant="contained" sx={{ width: '140px' }} color='secondary'>Увійти</Button>
    </Box>
  </AuthLayout>
}

export default Login