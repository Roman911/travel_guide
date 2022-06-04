import React from "react"
import { IconButton, Stack } from '@mui/material'
import { Instagram, Facebook, Telegram, Twitter } from '@mui/icons-material'

type Props = {
  jc?: string
}

export const SocSetBlock: React.FC<Props> = ({ jc }) => {
  return <Stack flexDirection='row' alignItems='center' spacing={1} justifyContent={jc ? jc : 'flex-start'}>
    <IconButton sx={{ marginTop: '8px' }}>
      <Facebook />
    </IconButton>
    <IconButton>
      <Twitter />
    </IconButton>
    <IconButton>
      <Instagram />
    </IconButton>
    <IconButton>
      <Telegram />
    </IconButton>
  </Stack>
}