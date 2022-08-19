import React from 'react'
import type { NextPage } from 'next'
import { useLazyQuery } from '@apollo/react-hooks'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box } from '@mui/material'
import { useAppDispatch } from '../hooks'
import Redirect from '../hooks/useRedirect'
import { AuthLayout, AuthForm } from '../modules'
import { LOGIN } from '../apollo/queries/login'
import {
  addedNotification,
  changeLinearProgress,
} from '../store/reducers/layoutSlice'
import { addedData } from '../store/reducers/userSlice'

export enum types {
  EMAIL = 'email',
  PASSWORD = 'password',
}

const schema = yup.object().shape({
  email: yup
    .string()
    .required('Поле не може бути пустим')
    .email('Некоректний емейл'),
  password: yup.string().required('Поле не може бути пустим'),
})

interface IFormInput {
  email: string
  password: string
}

const defaultValues = {
  email: '',
  password: '',
}

const Login: NextPage = () => {
  const [config, setConfig] = React.useState({
    isDisabled: false,
    showPassword: false,
  })
  const dispatch = useAppDispatch()
  const [userData, { loading, data, error }] = useLazyQuery(LOGIN)
  const methods = useForm<IFormInput>({
    mode: 'onTouched',
    defaultValues,
    resolver: yupResolver(schema),
  })
  const { handleSubmit, setError } = methods

  const handleClickShowPassword = () =>
    setConfig({ ...config, showPassword: !config.showPassword })

  const onSubmit: SubmitHandler<IFormInput> = data => {
    setConfig({ ...config, isDisabled: true })
    const { email, password } = data
    userData({ variables: { input: { email, password } } })
  }

  React.useEffect(() => {
    if (loading) {
      dispatch(changeLinearProgress(true))
    }
    if (error) {
      addedNotification({
        message: 'Неправильний логін або пароль',
        key: `${new Date().getTime()}+${Math.random()}`,
      })
      setError(types.EMAIL, { type: 'custom', message: 'error' })
      setError(types.PASSWORD, { type: 'custom', message: 'error' })
      setConfig({ ...config, isDisabled: false })
      dispatch(changeLinearProgress(false))
    }
    if (data) {
      dispatch(addedData(data.login))
      localStorage.setItem('userData', JSON.stringify({ ...data.login }))
      addedNotification({
        message: 'Ви успішно увійшли!',
        key: `${new Date().getTime()}+${Math.random()}`,
      })
      dispatch(changeLinearProgress(true))
    }
  }, [error, loading, data])

  if (data) return <Redirect href={'/'} />

  return (
    <AuthLayout
      title="Вхід"
      bottomText="Входячи в систему"
      subtitle={{
        title: 'Не маєте акаунта?',
        btn: 'Зареєструйтеся',
        link: '/registration',
      }}
    >
      <FormProvider {...methods}>
        <Box
          component="form"
          maxWidth="360px"
          margin="auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <AuthForm
            config={config}
            handleClickShowPassword={handleClickShowPassword}
          />
        </Box>
      </FormProvider>
    </AuthLayout>
  )
}

export default Login
