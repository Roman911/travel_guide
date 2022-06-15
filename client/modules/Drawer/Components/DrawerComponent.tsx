import React from "react"
import { Box, Button, Drawer, Link, Stack, Typography } from '@mui/material'
import { UserAvatar } from "../../../Components"

type Props = {
  drawerIsOpen: boolean
  toggleDrawer: any
  logout: () => void
  userData: null | {
    name: string
    email: string
    avatar?: string
  }
}

export const DrawerComponent: React.FC<Props> = ({ drawerIsOpen, toggleDrawer, userData, logout }) => {
  const list = () => (
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
          <Button variant="contained" color="secondary">Додати локацію</Button>
          <Button variant="contained" color="secondary">Додати статю</Button>
        </Stack>
        <Stack spacing={0.3} direction='column' alignItems='center' marginTop={8}>
          <Link underline="none" sx={{ color: '#fff', cursor: 'pointer', ':hover': { color: '#cb2c3b' } }}>Профіль</Link>
          <Link underline="none" sx={{ color: '#fff', cursor: 'pointer', ':hover': { color: '#cb2c3b' } }}>Мої публікації</Link>
          <Link underline="none" sx={{ color: '#fff', cursor: 'pointer', ':hover': { color: '#cb2c3b' } }}>Налаштування</Link>
          <Link underline="none" sx={{ color: '#fff', cursor: 'pointer', ':hover': { color: '#cb2c3b' } }}>Обране</Link>
          <Link underline="none" sx={{ color: '#fff', cursor: 'pointer', ':hover': { color: '#cb2c3b' } }} onClick={logout}>Вийти</Link>
        </Stack>
      </Box>
    </Box>
  )

  return <Drawer
    anchor='right'
    open={drawerIsOpen}
    onClose={toggleDrawer()}
  >
    {list()}
  </Drawer>
}