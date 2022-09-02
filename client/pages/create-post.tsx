import React from 'react'
import type { NextPage } from 'next'
import { useLazyQuery } from '@apollo/client'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box } from '@mui/material'
//import { useActions } from '../hooks'
//import Redirect from '../hooks/useRedirect'
import { CreatePost, MainLayout } from '../modules'
//import { LOGIN } from '../apollo/queries/login'

export enum types {
  TYPE_MATERIAL = 'type_material',
  TITLE = 'title',
  LINK = 'link',
  WORK_TIME = 'work_time',
  TAGS = 'tags',
}

const schema = yup.object().shape({
  type_material: yup.string().required('Поле не може бути пустим'),
})

interface IFormInput {
  type_material: { label: string; id: string } | null
  region: string
  link: string | null
  work_time: string | null
  tags: string[]
}

const defaultValues = {
  type_material: {
    label: 'Новини',
    id: 'new',
  },
  region: '',
  link: null,
  work_time: null,
  tags: [],
}

const CreatePostPage: NextPage = () => {
  const [config, setConfig] = React.useState({
    isDisabled: false,
    showPassword: false,
  })
  //const { addUserData, addedNotification, changeLinearProgress } = useActions()

  const methods = useForm<IFormInput>({
    mode: 'onTouched',
    defaultValues,
    //resolver: yupResolver(schema),
  })
  const { handleSubmit, setError } = methods
  //const [userData, { loading, data, error }] = useLazyQuery(LOGIN)
  const handleClickShowPassword = () =>
    setConfig({ ...config, showPassword: !config.showPassword })

  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log(data)
    //setConfig({ ...config, isDisabled: true })
    //const { email, password } = data
    //userData({
    //variables: {
    //input: {
    //email,
    //password,
    //},
    //},
    //})
  }

  React.useEffect(() => {
    //if (loading) {
    //changeLinearProgress(true)
    //}
    //if (error) {
    // addedNotification({
    // message: 'Неправильний логін або пароль',
    // key: `${new Date().getTime()}+${Math.random()}`,
    //})
    //setError(types.EMAIL, { type: 'custom', message: 'error' })
    // setError(types.PASSWORD, { type: 'custom', message: 'error' })
    //setConfig({ ...config, isDisabled: false })
    //changeLinearProgress(false)
    // }
    //if (data) {
    // addUserData(data.login)
    // localStorage.setItem('userData', JSON.stringify({ ...data.login }))
    // addedNotification({
    //message: 'Ви успішно увійшли!',
    // key: `${new Date().getTime()}+${Math.random()}`,
    // })
    // changeLinearProgress(true)
    // }
  }, [
    {
      /*error, loading, data*/
    },
  ])

  return (
    <MainLayout>
      <FormProvider {...methods}>
        <Box component="form" margin="auto" onSubmit={handleSubmit(onSubmit)}>
          <CreatePost />
        </Box>
      </FormProvider>
    </MainLayout>
  )
}

export default CreatePostPage
