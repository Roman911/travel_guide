import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  Switch,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { Close } from '@mui/icons-material'
import { locations, tickets } from '../config'
import { UploadFile } from '../../../../'
import { MyController } from '../../../../../Components'

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
    watch,
  } = useFormContext()

  const checkedSwitch = watch('isPrice')

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
        <MyController
          type="title"
          label="Назва локації"
          multiline={false}
          rows={1}
          size="small"
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
        <MyController
          type="small_text"
          label="Короткий опис локації"
          multiline={true}
          rows={4}
          size="small"
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
              size="small"
              renderInput={params => (
                <TextField {...params} label="Тип локації" />
              )}
            />
          )}
        />
        <Controller
          name="isPrice"
          control={control}
          render={({ field: { onChange, value } }) => (
            <FormControl component="fieldset" variant="standard">
              <FormLabel component="legend">Вхідний Квиток</FormLabel>
              <FormControlLabel
                control={
                  <Switch
                    //checked={state.gilad}
                    onChange={onChange}
                    name="gilad"
                  />
                }
                label="Вхід вільний"
              />
            </FormControl>
          )}
        />
        {tickets.map(i => {
          return (
            <MyController
              key={i.id}
              type={`tickets.${i.id}`}
              label={i.label}
              multiline={false}
              rows={1}
              size="small"
              inputProps="грн"
              disabled={checkedSwitch}
            />
          )
        })}
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
