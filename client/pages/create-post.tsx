import React, { useState } from 'react'
import type { NextPage } from 'next'
import { useMutation } from '@apollo/client'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box } from '@mui/material'
import { useActions, useTypedSelector } from '../hooks'
import { CreatePost, MainLayout } from '../modules'
import { CREATE_POST } from '../apollo/mutations/post'
import { uploadFileAPI } from '../store/reducers/uloadFileSlice'
import { IFormInput } from '../types/post'

const schema = yup.object().shape({
  title: yup.string().required('Поле не може бути пустим'),
  small_text: yup.string().required('Поле не може бути пустим'),
})

const defaultValues = {
  title: '',
  type_material: {
    label: 'Новини',
    id: 'new',
  },
  link: '',
  work_time: '',
  tags: '',
  small_text: '',
  how_to_get_there: '',
  editor: '',
  uploadFile: null,
}

const CreatePostPage: NextPage = () => {
  const [file, setFile] = useState<string | File>('')
  const [disabled, setDisabled] = useState(false)
  const {
    createPost: { locationID, region },
    user: { refreshToken },
  } = useTypedSelector(state => state)
  const [createPost] = useMutation(CREATE_POST)
  const { addedNotification, changeLinearProgress } = useActions()
  const [createFile] = uploadFileAPI.useCreateFileMutation()

  const methods = useForm<IFormInput>({
    mode: 'onTouched',
    defaultValues,
    resolver: yupResolver(schema),
  })
  const { handleSubmit, setError, reset } = methods

  const onSubmit: SubmitHandler<IFormInput> = async values => {
    const {
      title,
      small_text,
      tags,
      type_material,
      link,
      work_time,
      how_to_get_there,
      editor,
    } = values
    setDisabled(true)
    changeLinearProgress(true)

    if (file) {
      await createFile({ url: '', file })
        .then(data => {
          //@ts-ignore
          const cover = data.data.image
          const input = {
            token: refreshToken,
            title,
            small_text,
            region,
            cover,
            tags: tags.split(', '),
            type_material: type_material?.id,
            location: locationID,
            link,
            work_time,
            how_to_get_there,
            editor,
          }
          createPost({ variables: { input } })
            .then(data => {
              addedNotification({
                message: 'Статя ушпішно добавлена',
                key: `${new Date().getTime()}+${Math.random()}`,
              })
              setFile('')
              reset()
            })
            .finally(() => {
              changeLinearProgress(false)
              setDisabled(false)
            })
        })
        .catch(error =>
          setError('uploadFile', {
            type: 'custom',
            message: 'Добавте обкладинку',
          })
        )
    }
  }

  return (
    <MainLayout>
      <FormProvider {...methods}>
        <Box component="form" margin="auto" onSubmit={handleSubmit(onSubmit)}>
          <CreatePost setFile={setFile} disabled={disabled} />
        </Box>
      </FormProvider>
    </MainLayout>
  )
}

export default CreatePostPage
