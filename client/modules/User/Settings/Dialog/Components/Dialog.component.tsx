import React from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material'
import { Close } from '@mui/icons-material'
import { Main, UploadAvatar } from '../'

interface IProps {
  isMain: boolean
  isOpen: boolean
  handleClick: () => void
  handleClose: () => void
  setFile: (arg: string | Blob) => void
  setPreviewImage: (props: string) => void
}

const DialogComponent: React.FC<IProps> = ({
  isMain,
  isOpen,
  handleClick,
  handleClose,
  setFile,
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth={true}
      maxWidth="sm"
    >
      <IconButton
        onClick={handleClose}
        color="secondary"
        sx={{
          marginTop: 0,
          position: 'absolute',
          top: 14,
          right: 4,
        }}
      >
        <Close />
      </IconButton>
      <DialogTitle
        textAlign="center"
        sx={{ borderBottom: '1px solid hsla(0,0%,89.8%,.8)' }}
      >
        Оновити основну світлину
      </DialogTitle>
      <DialogContent sx={{ marginTop: 3 }}>
        {isMain ? (
          <Main handleClick={handleClick} setFile={setFile} />
        ) : (
          <UploadAvatar />
        )}
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
