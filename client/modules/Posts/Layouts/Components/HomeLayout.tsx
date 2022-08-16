import React from 'react'
import { Container } from '@mui/material'

interface IProps {
  children: React.ReactNode
}

const HomeLayout: React.FC<IProps> = ({ children }) => {
  return (
    <Container maxWidth="xl">
      <div>{children}</div>
    </Container>
  )
}

export default HomeLayout
