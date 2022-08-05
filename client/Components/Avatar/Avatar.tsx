import React from 'react'
import { Avatar } from '@mui/material'
import { PermIdentity } from '@mui/icons-material'

type Props = {
  size: number
  sx?: any
  userData?: null | {
    avatar?: string
    name: string
  }
}

const UserAvatar: React.FC<Props> = ({ size, userData, sx }) => {
  const params = { width: size, height: size, color: '#fff', ...sx }

  console.log('render: Components, UserAvatar')

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

export default React.memo(UserAvatar)
