import React from 'react'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { useMutation } from '@apollo/client'
import { Box } from '@mui/material'
import { useActions } from '../../../../../hooks'
import { DialogComponent } from '../Components'

interface IProps {
  isOpen: boolean
  handleClose: () => void
}

interface IFormInput {
  uploadFile: File | null
}

const defaultValues = {
  uploadFile: null,
}

const baseUrl = process.env.NEXT_APP_HOST_API || ''

const Dialog: React.FC<IProps> = ({ isOpen, handleClose }) => {
  const { changeLinearProgress } = useActions()
  const [isMain, setMain] = React.useState<boolean>(true)
  const [file, setFile] = React.useState<string | Blob>('')
  const [previewImage, setPreviewImage] = React.useState<string>()
  const [isDisabled, setDisabled] = React.useState<boolean>(false)

  const methods = useForm<IFormInput>({
    mode: 'all',
    defaultValues,
  })
  const { handleSubmit } = methods

  const onSubmit: SubmitHandler<IFormInput> = async values => {
    setDisabled(true)
    changeLinearProgress(true)
    let formData = new FormData()
    formData.append('image', file)

    await fetch(baseUrl + '/settings', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(error =>
        methods.setError('uploadFile', {
          type: 'custom',
          message: 'Добавте обкладинку',
        })
      )
  }

  const handleClick = () => {
    setMain(prev => !prev)
  }

  return (
    <FormProvider {...methods}>
      <Box component="form" margin="auto" onSubmit={handleSubmit(onSubmit)}>
        <DialogComponent
          isMain={isMain}
          isOpen={isOpen}
          handleClick={handleClick}
          handleClose={handleClose}
          setFile={setFile}
          setPreviewImage={setPreviewImage}
        />
      </Box>
    </FormProvider>
  )
}

export default Dialog
