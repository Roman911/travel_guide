import React from "react"
import Image from 'next/image'
import { Box, Paper, Typography } from '@mui/material'
import { Layout } from './'
import { Footer, Header } from '..'
import { BottomNavigation, Drawer } from "../../modules"

type Props = {
  children?: React.ReactNode
  isImg: boolean
}

const TopImg = () => {
  return <Box sx={{ height: 'calc(100vh - 63px)' }}>
    <Image
      alt="Mountains"
      src='/images/velosipedyi-banner-1.jpg'
      layout="fill"
      objectFit="cover"
      quality={100}
    />
    <Box sx={{ position: 'absolute', top: '50%', right: 0, mr: 10, transform: 'translateY(-50%)' }}>
      <Paper elevation={6} sx={{ p: 2, opacity: 0.9 }} >
        <Typography variant="h2" textAlign='end'>
          У нас:
        </Typography>
        <Typography variant="h3" textAlign='end'>
          327 локацій
        </Typography>
        <Typography variant="h4" textAlign='end'>
          і 124 маршрути
        </Typography>
      </Paper>
    </Box>
  </Box>
}

export const MainLayout: React.FC<Props> = ({ children, isImg }) => {
  const callback = (id: any, phase: any, actualTime: any, baseTime: any, startTime: any, commitTime: any) => {
    console.log(`${id}'s ${phase} phase:`);
    console.log(`Actual time: ${actualTime}`);
    console.log(`Base time: ${baseTime}`);
    console.log(`Start time: ${startTime}`);
    console.log(`Commit time: ${commitTime}`);
  }

  return <Layout>
    <Box>
      <React.Profiler id="Header" onRender={callback}>
        <Header />
      </React.Profiler>
      {isImg && <TopImg />}
      {children}
      <Footer />
      <Drawer />
      <BottomNavigation />
    </Box>
  </Layout>
}