import React from 'react'
import type { NextPage } from 'next'
import { useLazyQuery } from '@apollo/react-hooks'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { Box } from '@mui/material'
import { useActions } from '../store/hooks'
import Redirect from '../hooks/useRedirect'
import { AuthLayout, AuthForm } from '../Components'
import { LOGIN } from '../apollo/queries/login'

export enum types {
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
  const [isDisabled, setDisabled] = React.useState(false)
  const { setData, enqueueSnackbar, linearProgress } = useActions()
  const [userData, { loading, data, error }] = useLazyQuery(LOGIN)
  const methods = useForm<IFormInput>({ mode: "onTouched", defaultValues, resolver: yupResolver(schema) })
  const { handleSubmit, setError } = methods

  const onSubmit: SubmitHandler<IFormInput> = data => {
    setDisabled(true)
    const { email, password } = data
    userData({ variables: { input: { email, password } } })
  }

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
    <FormProvider {...methods}>
      <Box component="form" maxWidth='360px' margin='auto' onSubmit={handleSubmit(onSubmit)}>
        <AuthForm isDisabled={isDisabled} />
      </Box>
    </FormProvider>
  </AuthLayout>
}

export default Login