import React from 'react'
import type { NextPage } from 'next'
import { useMutation } from '@apollo/client'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box } from '@mui/material'
import { useActions, useTypedSelector } from '../hooks'
//import Redirect from '../hooks/useRedirect'
import { CreatePost, MainLayout } from '../modules'
//import { LOGIN } from '../apollo/queries/login'

export enum types {
  TYPE_MATERIAL = 'type_material',
  TITLE = 'title',
  LINK = 'link',
  WORK_TIME = 'work_time',
  TAGS = 'tags',
  SMALL_TEXT = 'small_text',
  HOW_TO_GET_THERE = 'how_to_get_there',
}

const schema = yup.object().shape({
  title: yup.string().required('Поле не може бути пустим'),
  small_text: yup.string().required('Поле не може бути пустим'),
})

interface IFormInput {
  title: string
  type_material: { label: string; id: string } | null
  link: string
  work_time: string
  tags: string[]
  small_text: string
}

const defaultValues = {
  title: '',
  type_material: {
    label: 'Новини',
    id: 'new',
  },
  link: '',
  work_time: '',
  tags: [],
  small_text: '',
}

const CreatePostPage: NextPage = () => {
  const { refreshToken } = useTypedSelector(state => state.user)
  //const { addUserData, addedNotification, changeLinearProgress } = useActions()

  const methods = useForm<IFormInput>({
    mode: 'onTouched',
    defaultValues,
    resolver: yupResolver(schema),
  })
  const { handleSubmit, setError } = methods

  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log(data)
    const {} = data
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
