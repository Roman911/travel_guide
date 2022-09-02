import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import {
  Autocomplete,
  Box,
  Button,
  Container,
  Grid,
  InputAdornment,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Stack,
  Switch,
  TextField,
  Typography,
} from '@mui/material'
import { Regions, UploadFile } from '../../../'
import { QuillComponent } from '../../../../Components'
import { types } from '../../../../pages/create-post'
import { tickets, typesMaterial } from '../config'
import { MyController } from '../MyControllers'

interface IProps {
  previewImage?: string
  typeMaterial: { label: string; id: string } | null
  setTypeMaterial: (arg: { label: string; id: string } | null) => void
  setFile: (arg: string | File) => void
}

const CreatePostComponent: React.FC<IProps> = ({
  previewImage,
  typeMaterial,
  setTypeMaterial,
  setFile,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <Container maxWidth="xl" sx={{ marginTop: '73px' }}>
      <Typography variant="h2">РЕДАГУВАННЯ</Typography>
      <Paper elevation={3}>
        <Grid container paddingTop={3} paddingLeft={3} paddingRight={3}>
          <Grid item xs={12} sm={12} md={8}>
            <Grid container>
              <Grid item xs={12} sm={12} md={6}>
                <Stack spacing={2}>
                  <Controller
                    name={types.TYPE_MATERIAL}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <Autocomplete
                        size="small"
                        disablePortal
                        isOptionEqualToValue={(option, value) =>
                          option.id === value.id
                        }
                        options={typesMaterial}
                        onChange={(event, item) => {
                          console.log(item)
                          setTypeMaterial(item)
                          onChange(item)
                        }}
                        value={value}
                        renderInput={params => (
                          <TextField {...params} label="Тип матеріалу" />
                        )}
                      />
                    )}
                  />
                  {typeMaterial?.id === 'post' && (
                    <Button variant="contained" color="secondary">
                      Додати локацію
                    </Button>
                  )}
                  <Regions isMap={false} />
                  <MyController
                    type={types.TITLE}
                    label="Заголовок"
                    multiline={false}
                    rows={1}
                    size="small"
                  />
                  <MyController
                    type={types.LINK}
                    label="Посилання на оригінал"
                    multiline={false}
                    rows={1}
                    size="small"
                  />
                  {typeMaterial?.id === 'post' && (
                    <MyController
                      type={types.WORK_TIME}
                      label="Час роботи"
                      multiline={false}
                      rows={1}
                      size="small"
                    />
                  )}
                  {typeMaterial?.id !== 'post' && (
                    <MyController
                      type={types.TAGS}
                      label="Теги"
                      multiline={true}
                      rows={4}
                      size="small"
                    />
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Stack spacing={2} marginLeft={2}>
                  <UploadFile
                    name="Обрати фото"
                    uploadButton={true}
                    setFile={setFile}
                  />
                  {previewImage && (
                    <img
                      src={previewImage}
                      style={{
                        width: '518px',
                        maxWidth: '100%',
                        height: `${(9 / 16) * 518}px`,
                      }}
                    />
                  )}
                </Stack>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Paper elevation={2} sx={{ marginLeft: 3 }}>
              <Stack spacing={1.3} padding={2}>
                <Controller
                  name="isType"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <FormControl component="fieldset" variant="standard">
                      <FormLabel component="legend">Вхідний Квиток</FormLabel>
                      <FormControlLabel
                        control={
                          <Switch
                            //checked={state.gilad}
                            //onChange={handleChange}
                            name="gilad"
                          />
                        }
                        label="Вхід вільний"
                      />
                    </FormControl>
                  )}
                />
                <Controller
                  name={types.TITLE}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      size="small"
                      label="Дорослий"
                      variant="outlined"
                      error={!!errors[types.TITLE]}
                      sx={{ width: '100%', margin: '5px 0' }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">грн</InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
                <Controller
                  name={types.TITLE}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      size="small"
                      label="Дитячий"
                      variant="outlined"
                      error={!!errors[types.TITLE]}
                      sx={{ width: '100%', margin: '5px 0' }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">грн</InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
                <Controller
                  name={types.TITLE}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      size="small"
                      label="Студенський"
                      variant="outlined"
                      error={!!errors[types.TITLE]}
                      sx={{ width: '100%', margin: '5px 0' }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">грн</InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
                <Controller
                  name={types.TITLE}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      size="small"
                      label="Пенсійний"
                      variant="outlined"
                      error={!!errors[types.TITLE]}
                      sx={{ width: '100%', margin: '5px 0' }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">грн</InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
                <Controller
                  name={types.TITLE}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      size="small"
                      label="Груповий"
                      variant="outlined"
                      error={!!errors[types.TITLE]}
                      sx={{ width: '100%', margin: '5px 0' }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">грн</InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
              </Stack>
            </Paper>
          </Grid>
        </Grid>
        <Stack spacing={2} padding={2}>
          <Controller
            name={types.TITLE}
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Короткий опис"
                variant="outlined"
                error={!!errors[types.TITLE]}
                sx={{ width: '100%', margin: '5px 0' }}
                multiline
                rows={4}
              />
            )}
          />
          <Controller
            name={types.TITLE}
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Як дістатися"
                variant="outlined"
                error={!!errors[types.TITLE]}
                sx={{ width: '100%', margin: '5px 0' }}
              />
            )}
          />
          {typeMaterial?.id === 'post' && (
            <MyController
              type={types.TAGS}
              label="Теги"
              multiline={false}
              rows={1}
            />
          )}
          <QuillComponent />
          <Box
            display="flex"
            sx={{ alignItems: 'center', justifyContent: 'flex-end' }}
          >
            <Button
              type="submit"
              variant="contained"
              sx={{ marginLeft: '10px', width: '180px' }}
              color="secondary"
              //disabled={!userData}
            >
              Зберегти
            </Button>
          </Box>
        </Stack>
      </Paper>
    </Container>
  )
}

export default CreatePostComponent
