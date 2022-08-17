import React from 'react'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { Box } from '@mui/material'
import { useMutation } from '@apollo/react-hooks'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useActions, useTypedSelector } from '../../../../../store/hooks'
import { CreateLocationComponent } from '../Components'
import { CREATE_LOCATION } from '../../../../../apollo/mutations/locations'

import axios from 'axios'
import useFileUpload from 'react-use-file-upload'

const schema = yup.object().shape({
  title: yup.string().min(5).max(50).required('Поле не може бути пустим'),
  small_text: yup.string().min(10).max(60).required('Поле не може бути пустим'),
  address: yup.string().min(10).max(100).required('Поле не може бути пустим'),
  latitude: yup.number().min(3).max(50).required('Поле не може бути пустим'),
  longitude: yup.number().min(3).max(50).required('Поле не може бути пустим'),
})

interface IProps {
  handleClick: () => void
}

interface IFormInput {
  title: string
  small_text: string
  isType: {
    label: string
    id: string
  }
  address: string
  region: string
  latitude: number
  longitude: number
  token: string
  uploadFile?: File
}

const defaultValues = {
  title: '',
  small_text: '',
  isType: {
    label: 'Інше',
    id: 'other',
  },
  address: '',
  region: '',
  latitude: 0,
  longitude: 0,
  token: '',
  uploadFile: undefined,
}

const CreateLocation: React.FC<IProps> = ({ handleClick }) => {
  const {
    user: { refreshToken },
    mapBox: { address, latLng },
  } = useTypedSelector(state => state)
  const { setType } = useActions()
  const [previewImage, setPreviewImage] = React.useState<string>()
  const [createComment] = useMutation(CREATE_LOCATION)
  const methods = useForm<IFormInput>({
    mode: 'all',
    defaultValues,
  })
  const { handleSubmit } = methods

  const {
    files,
    fileNames,
    fileTypes,
    totalSize,
    totalSizeInBytes,
    handleDragDropEvent,
    clearAllFiles,
    createFormData,
    setFiles,
    removeFile,
  } = useFileUpload()

  const onSubmit: SubmitHandler<IFormInput> = async values => {
    const formData = createFormData()

    const response = await axios.post('http://localhost:3005', formData)

    console.log('click', values, previewImage, response, formData)
  }

  React.useEffect(() => {
    if (address) {
      methods.setValue('address', address)
    }
    if (latLng) {
      methods.setValue('latitude', latLng.latitude)
      methods.setValue('longitude', latLng.longitude)
    }
  }, [address, latLng])

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        margin="auto"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ height: '100%', overflowY: 'auto' }}
      >
        <CreateLocationComponent
          handleClick={handleClick}
          previewImage={previewImage}
          setPreviewImage={setPreviewImage}
          setType={setType}
          setFiles={setFiles}
        />
      </Box>
    </FormProvider>
  )
}

export default CreateLocation
