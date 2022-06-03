import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from "react"
import { Container, Typography } from '@mui/material'
import { MainLayout } from '../../Components'

const isOk = () => {
  return <>
    <Typography variant="h4" gutterBottom component="div" marginTop={10}>
      Реєстрація пройшла успішно, перед Вами відкриваються нові можливості!
    </Typography>
    <Typography variant="subtitle1" gutterBottom component="div">
      {/*Вітаю {data.activate?.user?.name}!*/}
    </Typography>
    <Typography variant="body1" gutterBottom>
      Вітаю з реєстрацією на travelguide, який є місцем зустрічі людей які неможуть уявити своє життя без подорожей.
    </Typography>
    <Typography variant="body1" gutterBottom>
      Заповнюйте інформацію про себе http://travelguide.space/user, завантажуйте свою аватару та поділіться своїми цікавими локаціями http://travelguide.space/create-location, та стаєте новим учасником спільноти travelguide.space.
    </Typography>
    <Typography variant="body1" gutterBottom>
      А якщо виникнуть питання, уточнення чи побажання, пишіть мені.
    </Typography>
    <Typography variant="subtitle1" gutterBottom component="div">
      Я з радістю відповім.
    </Typography>
    <Typography variant="body1" gutterBottom>
      roma-lysyk@ukr.net
    </Typography>
  </>
}

const isNotOk = (link: string | string[] | undefined) => {
  return <Typography variant="h4" gutterBottom component="div" marginTop={10}>
    {link}
  </Typography>
}

const Activate: NextPage = () => {
  const router = useRouter()
  const link = router.query.id

  const data = true

  return <MainLayout>
    <Container maxWidth="md" sx={{ minHeight: 'calc(100vh - 260px)' }}>
      {data ? isOk() : isNotOk(link)}
    </Container>
  </MainLayout>
}

export default Activate