import React from "react"
import { Avatar } from '@mui/material'

type Props = {
  size: number
  avatar?: string
  name?: string
  sx?: any
}

export const UserAvatar: React.FC<Props> = ({ size, avatar, name, sx }) => {
  const params = { width: size, height: size, color: '#fff', ...sx }

  return avatar ?
    <Avatar sx={params} alt={name} src={`http://localhost:3005/images${avatar}`} /> :
    <Avatar sx={params}>
      {name?.[0]}
    </Avatar>
}