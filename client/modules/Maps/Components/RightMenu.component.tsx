import React from "react"
import { Box, Typography } from '@mui/material'

type Props = {
  children: React.ReactNode
}

export const RightMenuComponent: React.FC<Props> = ({ children }) => {
  return <Box padding={3}>
  { children }
  <Typography variant="h6">
    Області
  </Typography>
</Box>
}