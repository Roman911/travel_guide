import React from 'react'
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

const CreateLocationComponent: React.FC<IProps> = ({ handleClick }) => {
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
        <TextField label="Назва локації" variant="outlined" />
        <UploadButton
          variant="outlined"
          //@ts-ignore
          component="label"
        >
          Обрати фото
          <input hidden accept="image/*" multiple type="file" />
        </UploadButton>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={locations}
          //sx={{ width: w }}
          renderInput={params => <TextField {...params} label="Тип локації" />}
        />
        <TextField
          id="filled-multiline-static"
          label="Короткий опис локації"
          multiline
          rows={4}
          variant="outlined"
        />
        <TextField label="Адрес" variant="outlined" />
        <Typography variant="body1">Координати</Typography>
        <Stack direction="row" spacing={1}>
          <TextField sx={{ width: '50%' }} label="Широта" variant="outlined" />
          <TextField sx={{ width: '50%' }} label="Довгота" variant="outlined" />
        </Stack>
        <Stack direction="row" justifyContent="flex-end">
          <Button variant="contained" color="secondary">
            Завантажити
          </Button>
        </Stack>
      </Stack>
    </Box>
  )
}

export default CreateLocationComponent
