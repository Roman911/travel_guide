import React from 'react'
import {
  Box,
  Button,
  ButtonProps,
  Stack,
  TextField,
  Typography,
  styled,
} from '@mui/material'

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

const CreateLocationComponent: React.FC = () => {
  return (
    <Box padding={2}>
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
          Завантажити фото
          <input hidden accept="image/*" multiple type="file" />
        </UploadButton>
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
          <TextField sx={{ width: '50%' }} label="" variant="outlined" />
          <TextField sx={{ width: '50%' }} label="" variant="outlined" />
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
