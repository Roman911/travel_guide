import type { IUserData } from '../../../typesScript/user'
import React from "react"
import { Box, Button, Drawer, Stack, Typography, styled } from '@mui/material'
import Link, { LinkProps } from '@mui/material/Link'
import { UserAvatar } from "../../../Components"

type Props = {
  drawerIsOpen: boolean
  toggleDrawer: any
  userData: null | IUserData
  logout: () => void
  handleClick: (path: string) => void
}

export const DrawerComponent: React.FC<Props> = ({ drawerIsOpen, toggleDrawer, userData, logout, handleClick }) => {
  const actions = [
    { name: 'Профіль', path: `/profile/${userData?._id}` },
    { name: 'Мої публікації', path: '/' },
    { name: 'Налаштування', path: '/profile/settings' },
    { name: 'Обране', path: '/' }
  ]

  const MyLink = styled(Link)<LinkProps>(({ theme }) => ({
    color: '#fff',
    cursor: 'pointer',
    '&:hover': { color: '#cb2c3b' }
  }))

  return <Drawer
    anchor='right'
    open={drawerIsOpen}
    onClose={toggleDrawer()}
    sx={{zIndex: (theme) => theme.zIndex.drawer + 2}}
  >
    <Box
      color='#fff'
      textAlign='center'
      bgcolor='#303335'
      sx={{ width: 250, height: '100%' }}
      role="presentation"
      onClick={toggleDrawer()}
      onKeyDown={toggleDrawer()}
    >
      <Box p={2} marginTop={4}>
        <UserAvatar sx={{ margin: '0 auto' }} size={80} avatar={userData?.avatar} name={userData?.name} />
        <Typography variant="subtitle1" marginTop={2}>{userData?.email}</Typography>
        <Typography variant="body2" textAlign='center'>рейтинг: 0</Typography>
        <Stack spacing={2} direction='column' alignItems='center' marginTop={6}>
          <Button onClick={() => handleClick('/create-location')} variant="contained" color="secondary">Додати локацію</Button>
          <Button onClick={() => handleClick('/')} variant="contained" color="secondary">Додати статю</Button>
        </Stack>
        <Stack spacing={0.3} direction='column' alignItems='center' marginTop={8}>
          { actions.map((i,index) => <MyLink key={index} underline='none' onClick={() => handleClick(i.path)} >{i.name}</MyLink>) }
          <MyLink underline='none' onClick={logout} >Вийти</MyLink>
        </Stack>
      </Box>
    </Box>
  </Drawer>
}