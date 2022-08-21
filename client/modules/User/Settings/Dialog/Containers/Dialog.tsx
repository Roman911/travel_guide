import React from 'react'
import { DialogComponent } from '../Components'

interface IProps {
  isOpen: boolean
  handleClose: () => void
}

const Dialog: React.FC<IProps> = ({ isOpen, handleClose }) => {
  return <DialogComponent isOpen={isOpen} handleClose={handleClose} />
}

export default Dialog
