import React from 'react'
import { Box } from '@mui/material'

interface IProps {
  children: React.ReactNode
}

const LeftBoxLayout: React.FC<IProps> = ({ children }) => {
  return (
    <Box width={500} marginTop={8}>
      {children}
    </Box>
  )
}

export default LeftBoxLayout
