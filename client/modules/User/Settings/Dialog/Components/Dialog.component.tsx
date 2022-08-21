import React from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from '@mui/material'

interface IProps {
  isOpen: boolean
  handleClose: () => void
}

const DialogComponent: React.FC<IProps> = ({ isOpen, handleClose }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth={true}
      maxWidth="sm"
    >
      <DialogTitle sx={{ borderBottom: '1px solid hsla(0,0%,89.8%,.8)' }}>
        Оновити основну світлину
      </DialogTitle>
      <DialogContent sx={{ marginTop: 3 }}>
        <Button variant="contained" color="secondary">
          Завантажити світлину
        </Button>
        <Typography variant="h6" marginTop={2} marginBottom={2}>
          Основні світлини
        </Typography>
        <Stack direction="row" spacing={1}>
          <img
            width="104px"
            height="104px"
            style={{
              borderTopLeftRadius: '8px',
              borderBottomLeftRadius: '8px',
            }}
            src="https://scontent-frx5-1.xx.fbcdn.net/v/t1.6435-9/59777662_2288353538149940_2722857180872048640_n.jpg?stp=dst-jpg_p110x80&_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pr_35TXEv7wAX8i1EXN&tn=77xrR_p_moFmUlN9&_nc_ht=scontent-frx5-1.xx&oh=00_AT-wCAqWP5inSPmxpn1qRQlh2pJqcfVdvpoI6jiyibb4Bw&oe=62D786C5"
            alt=""
          />
          <img
            width="104px"
            height="104px"
            src="https://scontent-frx5-1.xx.fbcdn.net/v/t1.6435-9/59777662_2288353538149940_2722857180872048640_n.jpg?stp=dst-jpg_p110x80&_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pr_35TXEv7wAX8i1EXN&tn=77xrR_p_moFmUlN9&_nc_ht=scontent-frx5-1.xx&oh=00_AT-wCAqWP5inSPmxpn1qRQlh2pJqcfVdvpoI6jiyibb4Bw&oe=62D786C5"
            alt=""
          />
          <img
            width="104px"
            height="104px"
            src="https://scontent-frx5-1.xx.fbcdn.net/v/t1.6435-9/59777662_2288353538149940_2722857180872048640_n.jpg?stp=dst-jpg_p110x80&_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pr_35TXEv7wAX8i1EXN&tn=77xrR_p_moFmUlN9&_nc_ht=scontent-frx5-1.xx&oh=00_AT-wCAqWP5inSPmxpn1qRQlh2pJqcfVdvpoI6jiyibb4Bw&oe=62D786C5"
            alt=""
          />
          <img
            width="104px"
            height="104px"
            src="https://scontent-frx5-1.xx.fbcdn.net/v/t1.6435-9/59777662_2288353538149940_2722857180872048640_n.jpg?stp=dst-jpg_p110x80&_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pr_35TXEv7wAX8i1EXN&tn=77xrR_p_moFmUlN9&_nc_ht=scontent-frx5-1.xx&oh=00_AT-wCAqWP5inSPmxpn1qRQlh2pJqcfVdvpoI6jiyibb4Bw&oe=62D786C5"
            alt=""
          />
          <img
            width="104px"
            height="104px"
            style={{
              borderTopRightRadius: '8px',
              borderBottomRightRadius: '8px',
            }}
            src="https://scontent-frx5-1.xx.fbcdn.net/v/t1.6435-9/59777662_2288353538149940_2722857180872048640_n.jpg?stp=dst-jpg_p110x80&_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pr_35TXEv7wAX8i1EXN&tn=77xrR_p_moFmUlN9&_nc_ht=scontent-frx5-1.xx&oh=00_AT-wCAqWP5inSPmxpn1qRQlh2pJqcfVdvpoI6jiyibb4Bw&oe=62D786C5"
            alt=""
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="secondary" onClick={handleClose}>
          Disagree
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DialogComponent
