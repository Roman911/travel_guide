import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import {
  Autocomplete,
  Box,
  Button,
  ButtonProps,
  IconButton,
  Stack,
  TextField,
  Typography,
  styled,
} from '@mui/material'
import { Close } from '@mui/icons-material'
import { locations } from '../config/locationsType'

interface IProps {
  previewImage?: string
  setPreviewImage: (props: string) => void
  handleClick: () => void
}

const UploadButton = styled(Button)<ButtonProps>(({ theme }) => ({
  border: '2px dashed',
  borderColor: theme.palette.text.primary,
  color: theme.palette.text.primary,
  borderRadius: 0,
  opacity: 0.7,
  '&:hover': {
    border: '2px dashed',
    borderColor: theme.palette.text.primary,
  },
}))

const CreateLocationComponent: React.FC<IProps> = ({
  previewImage,
  setPreviewImage,
  handleClick,
}) => {
  const { control } = useFormContext()

  return (
    <Box padding={2} position="relative">
      <IconButton
        onClick={handleClick}
        color="secondary"
        sx={{
          marginTop: 0,
          position: 'absolute',
          top: 14,
          right: 1,
        }}
      >
        <Close />
      </IconButton>
      <Stack spacing={2}>
        <Typography variant="h5" textAlign="center">
          Додати нове цікаве місце
        </Typography>
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Назва локації" variant="outlined" />
          )}
        />
        <Controller
          name="uploadFile"
          control={control}
          render={({ field }) => (
            <UploadButton
              {...field}
              variant="outlined"
              //@ts-ignore
              component="label"
            >
              Обрати фото
              <input
                hidden
                accept="image/*"
                multiple
                type="file"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  if (event?.target?.files?.[0]) {
                    const file = event.target.files[0]
                    const reader = new FileReader()
                    reader.onloadend = () => {
                      setPreviewImage(reader.result as string)
                    }
                    reader.readAsDataURL(file)
                  }
                }}
              />
            </UploadButton>
          )}
        />
        {previewImage && (
          <img
            src={previewImage}
            style={{ maxWidth: '518px', height: `${(9 / 16) * 518}px` }}
          />
        )}
        <Controller
          name="small_text"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Короткий опис локації"
              multiline
              rows={4}
              variant="outlined"
            />
          )}
        />
        <Controller
          name="isType"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Autocomplete
              disablePortal
              options={locations}
              onChange={(event, item) => {
                onChange(item)
              }}
              value={value}
              //sx={{ width: w }}
              renderInput={params => (
                <TextField {...params} label="Тип локації" />
              )}
            />
          )}
        />
        <TextField label="Адрес" variant="outlined" />
        <Typography variant="body1">Координати</Typography>
        <Stack direction="row" spacing={1}>
          <TextField sx={{ width: '50%' }} label="Широта" variant="outlined" />
          <TextField sx={{ width: '50%' }} label="Довгота" variant="outlined" />
        </Stack>
        <Stack direction="row" justifyContent="flex-end">
          <Button type="submit" variant="contained" color="secondary">
            Завантажити
          </Button>
        </Stack>
      </Stack>
    </Box>
  )
}

export default CreateLocationComponent
