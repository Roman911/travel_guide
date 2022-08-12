import React from 'react'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { Box } from '@mui/material'
import { useMutation } from '@apollo/react-hooks'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { CreateLocationComponent } from '../Components'
import { CREATE_LOCATION } from '../../../../../apollo/mutations/locations'

const schema = yup.object().shape({
  title: yup.string().min(5).max(50).required('Поле не може бути пустим'),
  small_text: yup.string().min(10).max(60).required('Поле не може бути пустим'),
  address: yup.string().min(10).max(50).required('Поле не може бути пустим'),
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
}

const CreateLocation: React.FC<IProps> = ({ handleClick }) => {
  const [createComment] = useMutation(CREATE_LOCATION)
  const methods = useForm<IFormInput>({
    mode: 'all',
    defaultValues,
  })
  const { handleSubmit } = methods

  const onSubmit: SubmitHandler<IFormInput> = values => {
    console.log('click', values)
  }

  return (
    <FormProvider {...methods}>
      <Box component="form" margin="auto" onSubmit={handleSubmit(onSubmit)}>
        <CreateLocationComponent handleClick={handleClick} />
      </Box>
    </FormProvider>
  )
}

export default CreateLocation
