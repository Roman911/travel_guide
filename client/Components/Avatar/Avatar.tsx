import React from "react"
import { Avatar } from '@mui/material'

type Props = {
  size: number
  avatar?: string
  name?: string
}

export const UserAvatar: React.FC<Props> = ({ size, avatar, name }) => {
  const params = { width: size, height: size, color: '#fff' }

  return avatar ?
    <Avatar sx={params} alt={name} src={`http://localhost:3005/images${avatar}`} /> :
    <Avatar sx={params}>
      {name?.[0]}
    </Avatar>
}