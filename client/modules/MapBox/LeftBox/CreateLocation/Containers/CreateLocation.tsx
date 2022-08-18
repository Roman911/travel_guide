import React from 'react'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { Box } from '@mui/material'
import { useMutation } from '@apollo/react-hooks'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useActions, useTypedSelector } from '../../../../../store/hooks'
import { CreateLocationComponent } from '../Components'
import { CREATE_LOCATION } from '../../../../../apollo/mutations/locations'

const schema = yup.object().shape({
  title: yup.string().min(5).max(50).required('Поле не може бути пустим'),
  small_text: yup
    .string()
    .min(10)
    .max(260)
    .required('Поле не може бути пустим'),
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
  uploadFile: null,
}

const baseUrl = 'http://localhost:3005'

const CreateLocation: React.FC<IProps> = ({ handleClick }) => {
  const {
    user: { refreshToken },
    mapBox: { address, latLng },
  } = useTypedSelector(state => state)
  const { linearProgress, setType } = useActions()
  const [previewImage, setPreviewImage] = React.useState<string>()
  const [file, setFile] = React.useState(null)
  const [isDisabled, setDisabled] = React.useState(false)
  const [CreateLocation] = useMutation(CREATE_LOCATION)
  const methods = useForm<IFormInput>({
    mode: 'all',
    defaultValues,
    resolver: yupResolver(schema),
  })
  const { handleSubmit } = methods

  const onSubmit: SubmitHandler<IFormInput> = async values => {
    const { address, title, small_text, isType, latitude, longitude } = values

    setDisabled(true)
    linearProgress(true)
    let formData = new FormData()
    formData.append('image', file)

    await fetch(baseUrl, {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        CreateLocation({
          variables: {
            input: {
              token: refreshToken,
              title,
              small_text,
              isType: isType.id,
              address,
              region: 'Вінницька область',
              cover: data.image,
              latitude,
              longitude,
            },
          },
        })
          .then(data => {
            methods.reset()
          })
          .finally(() => setDisabled(false))
      })
      .catch(error =>
        methods.setError('uploadFile', {
          type: 'custom',
          message: 'Добавте обкладинку',
        })
      )
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
          isDisabled={isDisabled}
          handleClick={handleClick}
          previewImage={previewImage}
          setPreviewImage={setPreviewImage}
          setType={setType}
          setFile={setFile}
        />
      </Box>
    </FormProvider>
  )
}

export default CreateLocation
