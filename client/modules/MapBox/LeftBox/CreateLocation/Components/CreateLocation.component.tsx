import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import {
  Autocomplete,
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { Close } from '@mui/icons-material'
import { locations } from '../config/locationsType'
import { Regions, UploadFile } from '../../../../'

interface IProps {
  isDisabled: boolean
  previewImage?: string
  handleClick: () => void
  setType: (arg: string) => void
  setFile: (arg: string | File) => void
}

const CreateLocationComponent: React.FC<IProps> = ({
  isDisabled,
  previewImage,
  handleClick,
  setType,
  setFile,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext()

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
            <TextField
              {...field}
              error={!!errors['title']}
              label="Назва локації"
              variant="outlined"
            />
          )}
        />
        <UploadFile name="Обрати фото" uploadButton={true} setFile={setFile} />
        {previewImage && (
          <img
            src={previewImage}
            style={{
              width: '518px',
              maxWidth: '518px',
              height: `${(9 / 16) * 518}px`,
            }}
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
              isOptionEqualToValue={(option, value) => option.id === value.id}
              options={locations}
              onChange={(event, item) => {
                setType(item.id)
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
        <Regions isMap={false} />
        <Controller
          name="address"
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Адрес" variant="outlined" />
          )}
        />
        <Typography variant="body1">Координати</Typography>
        <Stack direction="row" spacing={1}>
          <Controller
            name="latitude"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                sx={{ width: '50%' }}
                label="Широта"
                variant="outlined"
              />
            )}
          />
          <Controller
            name="longitude"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                sx={{ width: '50%' }}
                label="Довгота"
                variant="outlined"
              />
            )}
          />
        </Stack>
        <Stack direction="row" justifyContent="flex-end">
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            disabled={isDisabled}
          >
            Завантажити
          </Button>
        </Stack>
      </Stack>
    </Box>
  )
}

export default CreateLocationComponent
