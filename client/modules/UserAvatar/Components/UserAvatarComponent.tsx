import React from "react"
import { Avatar, IconButton } from '@mui/material'
import { PermIdentity } from '@mui/icons-material'

type Props = {
  handleClick: () => void
  size: number
  userData: null | {
    name: string
    email: string
    avatar?: string
  }
}

export const UserAvatarComponent: React.FC<Props> = ({ handleClick, userData, size }) => {
  const params = { width: size, height: size, color: '#fff' }

  return <IconButton sx={{ p: 0 }} onClick={handleClick}>
    {
      userData ? userData.avatar ? <Avatar sx={params} alt={userData.name} src={userData.avatar} /> :
        <Avatar sx={params}>
          {userData.name[0]}
        </Avatar> :
        <Avatar sx={params}>
          <PermIdentity />
        </Avatar>
    }
  </IconButton>
}