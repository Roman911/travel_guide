import React from 'react'
import dynamic from 'next/dynamic'
import { Container, Typography } from '@mui/material'

interface IProps {
  children: React.ReactNode
  home: boolean
  layout: {
    title: string
    link?: string
    linkTitle?: string
  }
}

interface IPropsLayout {
  children: React.ReactNode
}

const HomeLayout = dynamic<IPropsLayout>(
  () => import('../Components/HomeLayout') as any
)
const NewsLayout = dynamic<IPropsLayout>(
  () => import('../Components/NewsLayout') as any
)

const Layouts: React.FC<IProps> = ({ children, home, layout: { title } }) => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h2" marginTop={8}>
        {title}
      </Typography>
      {home ? (
        <HomeLayout>{children}</HomeLayout>
      ) : (
        <NewsLayout>{children}</NewsLayout>
      )}
    </Container>
  )
}

export default Layouts
