import React from 'react'
import { DialogComponent } from '../Components'

interface IProps {
  dialog: boolean
}

const Dialog: React.FC<IProps> = ({ dialog }) => {
  return <DialogComponent dialog={dialog} />
}

export default Dialog
