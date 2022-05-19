import React from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Box, Button, FormControl, IconButton, Input, InputAdornment, InputLabel, TextField } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { AuthLayout } from '../Components'

const Registration: NextPage = () => {
  const router = useRouter()
  const [showPassword, setShowPassword] = React.useState({ showPassword: true })

  return <AuthLayout title='Реєстрація' bottomText='Реєструючись' subtitle={{ title: 'Вже є акаунт?', btn: 'Вхід', link: '/login' }}>
    <Box component="form" maxWidth='360px' margin='auto' onChange={() => console.log('Change')}>
      <TextField id="email" label="Ел. пошта" variant="standard" sx={{ width: '100%', margin: '5px 0' }} />
      <FormControl sx={{ width: '100%', margin: '5px 0' }} variant="standard">
        <InputLabel htmlFor="password">Придумайте пароль</InputLabel>
        <Input
          id="password"
          type={showPassword ? 'text' : 'password'}
          //value={values.password}
          //onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
              //onClick={handleClickShowPassword}
              //onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl sx={{ width: '100%', margin: '5px 0' }} variant="standard">
        <InputLabel htmlFor="password2">Введіть пароль ще раз</InputLabel>
        <Input
          id="password2"
          type={showPassword ? 'text' : 'password'}
          //value={values.password}
          //onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
              //onClick={handleClickShowPassword}
              //onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Button variant="contained" sx={{ width: '180px', marginTop: '20px' }} color='secondary'>Зареєструватися</Button>
    </Box>
  </AuthLayout>
}

export default Registration