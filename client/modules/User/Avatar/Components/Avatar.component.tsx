import React from 'react'
import { Avatar } from '@mui/material'
import { PermIdentity } from '@mui/icons-material'
import type { IProps } from '../Containers'

const AvatarComponent: React.FC<IProps> = ({ size, userData, sx }) => {
  const params = { width: size, height: size, color: '#fff', ...sx }

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
      src={
        userData?.avatar && `http://localhost:3005/images${userData?.avatar}`
      }
    >
      {!userData?.avatar && <PermIdentity />}
    </Avatar>
  )
}

export default AvatarComponent
