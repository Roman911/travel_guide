import React from "react"
import NextLink from 'next/link'
import { Avatar, Box, Link, Stack, TextField, Typography } from '@mui/material'
import { PermIdentity } from '@mui/icons-material'
import { UserAvatar } from '../../../Components'

type Props = {
  userData: null | {
    name: string
    avatar?: string
  }
  comments: null | []
}

export const CommentsComponent: React.FC<Props> = ({ comments, userData }) => {

  return <Box>
    <Typography variant="h4" marginTop={4} sx={{ fontWeight: 100, letterSpacing: '0.25em' }}>
      КОМЕНТАРІ
    </Typography>
    {
      userData ? <Box sx={{ position: 'relative' }}>
        <TextField
          sx={{ border: '2px', width: '100%' }}
          id="standard-multiline-static"
          multiline
          rows={2}
          placeholder="Ваш коментар..."
          style={{
            paddingBottom: '4px'
          }}
          InputProps={{
            style: {
              paddingLeft: '76px',
              marginTop: '12px'
            }
          }}
        />
        <Box sx={{ position: 'absolute', top: '30px', left: '20px' }}>
          <UserAvatar size={40} avatar={userData?.avatar} name={userData.name} />
        </Box>
      </Box> :
        <Stack marginTop={2} direction='row' spacing={2} alignItems='flex-start' sx={{ border: '1px solid rgba(0,0,0,.1)', padding: '15px 20px' }}>
          <Avatar sx={{ width: 40, height: 40, color: '#fff' }}>
            <PermIdentity />
          </Avatar>
          <Typography variant="subtitle2">
            Привіт! Щоб коментувати, потрібно
            <NextLink href='/login'>
              <Link underline="none" sx={{ color: '#cb2c3b' }}>
                увійти
              </Link>
            </NextLink>
          </Typography>
        </Stack>
    }
    {
      !comments && <Typography variant="h5" marginTop={4}>Коментарі ще ніхто не залишав. Будьте першим</Typography>
    }
  </Box>
}