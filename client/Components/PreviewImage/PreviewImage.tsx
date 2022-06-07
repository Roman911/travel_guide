import React from "react"
import Image from 'next/image'
import { Box } from '@mui/material'

type Props = {
  children?: React.ReactNode
  img: string
}

export const PreviewImage: React.FC<Props> = ({ children, img }) => {
  return <Box sx={{ height: 'calc(100vh - 63px)' }}>
    <Image
      alt="Mountains"
      src={img}
      layout="fill"
      objectFit="cover"
      quality={100}
    />
    {children}
  </Box>
}