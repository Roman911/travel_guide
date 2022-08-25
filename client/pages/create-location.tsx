import type { NextPage } from 'next'
import { Box, Typography } from '@mui/material'
import { useTypedSelector } from '../hooks'
import { MainLayout } from '../modules'
import Redirect from '../hooks/useRedirect'

const CreateLocation: NextPage = () => {
  const { userData } = useTypedSelector(state => state.user)

  if (!userData) return <Redirect href="/" />

  return (
    <MainLayout>
      <Box marginTop="64px">
        <Typography>В розробці...</Typography>
      </Box>
    </MainLayout>
  )
}

export default CreateLocation
