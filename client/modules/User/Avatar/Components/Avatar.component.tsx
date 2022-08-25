import React from 'react'
import { Avatar } from '@mui/material'
import { PermIdentity } from '@mui/icons-material'
import type { IProps } from '../Containers'

const AvatarComponent: React.FC<IProps> = ({ size, userData, sx }) => {
  const params = { width: size, height: size, color: '#fff', ...sx }
  const avatarI =
    userData && userData.avatars.length !== 0 ? userData.avatars.length - 1 : 0

  console.log('render: Components, Avatar')

  if (!userData) {
    return (
      <Avatar sx={{ width: size, height: size, color: '#fff' }}>
        <PermIdentity />
      </Avatar>
    )
  }

  return (
    <Avatar
      sx={params}
      alt={userData?.name}
      src={`${process.env.NEXT_APP_HOST_API}images/${userData?.avatars[avatarI]}`}
    >
      {!userData?.avatars && <PermIdentity />}
    </Avatar>
  )
}

export default AvatarComponent
