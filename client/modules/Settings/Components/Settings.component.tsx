import React from "react"
import type { IUserData } from '../../../typesScript'
import { Badge, Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Paper, Stack, TextField, Typography, styled } from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'
import { UserAvatar } from '../../../Components'
import { SettingForm } from './'

interface IProps {
  userData: IUserData
}

export const SettingsComponent: React.FC<IProps> = ({ userData }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const MyIcon = styled(PhotoCamera)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    width: 34,
    height: 34,
    border: `2px solid ${theme.palette.background.paper}`,
    borderRadius: '50%',
    padding: '3px'
  }))

  return <Container maxWidth='lg'>
    <Typography marginTop={10} textTransform='uppercase' variant="h2" sx={{ fontSize: {xs: '2rem', sm: '2.75rem', md: '3.75rem'} }} >
      Налаштування
      </Typography>
    <Paper elevation={6} sx={{ padding: 4 }}>
      <Typography variant="body1" textTransform='uppercase' marginBottom={4} sx={{borderBottom: '1px solid hsla(0,0%,89.8%,.8)', paddingBottom: 2}}>
        Профіль
      </Typography>
      <Grid container spacing={2} >
        <Grid item xs={12} md={2} lg={2} sx={{textAlign: { xs: 'center', md: 'left' }}}>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            sx={{cursor: 'pointer'}}
            badgeContent={
              <MyIcon onClick={handleClickOpen} />
            }
          >
            <UserAvatar avatar={userData.avatar} size={140} />
          </Badge>
        </Grid>
        <Grid item xs={12} md={10} lg={10}>
          <SettingForm />
        </Grid>
      </Grid>
    </Paper>
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth={true}
      maxWidth='sm'
    >
      <DialogTitle sx={{borderBottom: '1px solid hsla(0,0%,89.8%,.8)'}}>
        Оновити основну світлину
      </DialogTitle>
      <DialogContent sx={{marginTop: 3}}>
        <Button variant="contained" color="secondary">Завантажити світлину</Button>
        <Typography variant='h6' marginTop={2} marginBottom={2}>
          Основні світлини
        </Typography>
        <Stack direction='row' spacing={1}>
          <img width='104px' height='104px' style={{borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px'}} src="https://scontent-frx5-1.xx.fbcdn.net/v/t1.6435-9/59777662_2288353538149940_2722857180872048640_n.jpg?stp=dst-jpg_p110x80&_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pr_35TXEv7wAX8i1EXN&tn=77xrR_p_moFmUlN9&_nc_ht=scontent-frx5-1.xx&oh=00_AT-wCAqWP5inSPmxpn1qRQlh2pJqcfVdvpoI6jiyibb4Bw&oe=62D786C5" alt="" />
          <img width='104px' height='104px' src="https://scontent-frx5-1.xx.fbcdn.net/v/t1.6435-9/59777662_2288353538149940_2722857180872048640_n.jpg?stp=dst-jpg_p110x80&_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pr_35TXEv7wAX8i1EXN&tn=77xrR_p_moFmUlN9&_nc_ht=scontent-frx5-1.xx&oh=00_AT-wCAqWP5inSPmxpn1qRQlh2pJqcfVdvpoI6jiyibb4Bw&oe=62D786C5" alt="" />
          <img width='104px' height='104px' src="https://scontent-frx5-1.xx.fbcdn.net/v/t1.6435-9/59777662_2288353538149940_2722857180872048640_n.jpg?stp=dst-jpg_p110x80&_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pr_35TXEv7wAX8i1EXN&tn=77xrR_p_moFmUlN9&_nc_ht=scontent-frx5-1.xx&oh=00_AT-wCAqWP5inSPmxpn1qRQlh2pJqcfVdvpoI6jiyibb4Bw&oe=62D786C5" alt="" />
          <img width='104px' height='104px' src="https://scontent-frx5-1.xx.fbcdn.net/v/t1.6435-9/59777662_2288353538149940_2722857180872048640_n.jpg?stp=dst-jpg_p110x80&_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pr_35TXEv7wAX8i1EXN&tn=77xrR_p_moFmUlN9&_nc_ht=scontent-frx5-1.xx&oh=00_AT-wCAqWP5inSPmxpn1qRQlh2pJqcfVdvpoI6jiyibb4Bw&oe=62D786C5" alt="" />
          <img width='104px' height='104px' style={{borderTopRightRadius: '8px', borderBottomRightRadius: '8px'}} src="https://scontent-frx5-1.xx.fbcdn.net/v/t1.6435-9/59777662_2288353538149940_2722857180872048640_n.jpg?stp=dst-jpg_p110x80&_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pr_35TXEv7wAX8i1EXN&tn=77xrR_p_moFmUlN9&_nc_ht=scontent-frx5-1.xx&oh=00_AT-wCAqWP5inSPmxpn1qRQlh2pJqcfVdvpoI6jiyibb4Bw&oe=62D786C5" alt="" />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="secondary" onClick={handleClose}>Disagree</Button>
      </DialogActions>
    </Dialog>
  </Container>
}