import React from 'react'
import { AvatarComponent } from '../Components'

export interface IProps {
  size: number
  sx?: any
  userData?: null | {
    avatars: string[] | []
    name: string
  }
}

const Avatar: React.FC<IProps> = ({ size, sx, userData }) => {
  return <AvatarComponent size={size} sx={sx} userData={userData} />
}

export default Avatar
