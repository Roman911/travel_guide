import React from "react"
import { AppBar, Box, Button, FormControlLabel, IconButton, Toolbar, Typography, Stack, styled } from '@mui/material'
import { NotificationsOutlined, Search } from '@mui/icons-material'
import { blue, grey } from '@mui/material/colors'
import { useActions, useTypedSelector } from '../../store/hooks'
import { MaterialUISwitch } from "./MaterialUISwitch"
import { Logo } from '../'
import { UserAvatar } from "../../modules"

export const Header: React.FC = () => {
  const { changeTheme } = useActions()
  const { theme } = useTypedSelector(state => state.theme)

  const CustomButon = styled(IconButton)(({ theme }) => ({
    border: `1px solid ${grey[700]}`,
    borderRadius: 10
  }))

  const UnderLine = styled('span')(({ theme }) => ({
    borderBottom: `2px solid ${blue[700]}`,
    position: 'absolute',
    width: '100%',
    top: 48
  }))

  return <AppBar position="fixed" sx={{ backgroundColor: theme === 'dark' ? '#1A2027' : '#fff' }}>
    <Toolbar >
      <Box sx={{ flexGrow: { xs: 1, sm: 1, md: 0 } }}>
        <Logo />
      </Box>
      <Stack direction='row' spacing={1.5} sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none', md: 'flex' } }}>
        <Button sx={{ color: grey[theme === 'dark' ? 50 : 800] }}>Новини<UnderLine /></Button>
        <Button sx={{ color: grey[theme === 'dark' ? 50 : 800] }}>Мапа</Button>
        <Button sx={{ color: grey[theme === 'dark' ? 50 : 800] }}>Маршрути</Button>
        <Button sx={{ color: grey[theme === 'dark' ? 50 : 800] }}>Про нас</Button>
      </Stack>
      <Stack direction='row' alignItems='center' spacing={1.5}>
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
        <CustomButon size="small">
          <NotificationsOutlined fontSize="small" />
        </CustomButon>
        <UserAvatar size={32} />
      </Stack>
    </Toolbar>
  </AppBar>
}