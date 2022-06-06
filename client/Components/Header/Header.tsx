import React from "react"
import { useRouter } from 'next/router'
import { AppBar, Box, Button, FormControlLabel, IconButton, Toolbar, Typography, Stack, styled } from '@mui/material'
import { NotificationsOutlined, Search } from '@mui/icons-material'
import { blue, grey } from '@mui/material/colors'
import { useActions, useTypedSelector } from '../../store/hooks'
import { MaterialUISwitch } from "./MaterialUISwitch"
import { Logo } from '../'
import { UserAvatar } from "../../modules"

const linksConfig = [
  {
    path: '/news',
    title: 'Новини'
  },
  {
    path: '/directions',
    title: 'Маршрути'
  },
  {
    path: '/maps',
    title: 'Карти'
  },
  {
    path: '/about',
    title: 'Про нас'
  }
]

export const Header: React.FC = () => {
  const router = useRouter()
  const { changeTheme, linearProgress } = useActions()
  const { theme } = useTypedSelector(state => state.theme)

  const UnderLine = styled('span')(({ theme }) => ({
    borderBottom: `2px solid ${blue[700]}`,
    position: 'absolute',
    width: '100%',
    top: 48
  }))

  const handleClick = (path: string) => {
    linearProgress(true)
    router.push(path)
  }

  const links = linksConfig.map(i => {
    return <Button
      key={i.path}
      sx={{ color: grey[theme === 'dark' ? 50 : 800] }}
      onClick={() => handleClick(i.path)}
    >
      {i.title}
      {router.pathname === i.path && <UnderLine />}
    </Button>
  })

  return <AppBar position="fixed" sx={{ backgroundColor: theme === 'dark' ? '#1A2027' : '#fff' }}>
    <Toolbar >
      <Box sx={{ paddingRight: 1, flexGrow: { xs: 1, sm: 1, md: 0 } }}>
        <Logo />
      </Box>
      <Stack direction='row' spacing={1.5} sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none', md: 'flex' } }}>
        {links}
      </Stack>
      <Stack direction='row' alignItems='center' spacing={1}>
        <Button size="small" sx={{ textTransform: 'none', display: { xs: 'none', sm: 'none', md: 'flex' } }} variant="outlined" endIcon={<Search />}>
          <Typography component='span' style={{ marginRight: 20 }}>
            Пошук...
          </Typography>
        </Button>
        <FormControlLabel
          onClick={() => changeTheme(theme === 'dark' ? 'light' : 'dark')}
          control={<MaterialUISwitch checked={theme === 'dark'} />}
          label=""
        />
        <IconButton aria-label="fingerprint">
          <NotificationsOutlined />
        </IconButton>
        <UserAvatar size={32} />
      </Stack>
    </Toolbar>
  </AppBar>
}