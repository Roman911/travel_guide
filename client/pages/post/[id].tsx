import type { NextPage } from 'next'
import { Box, Button, Container, Grid, IconButton, Paper, Stack, Typography } from '@mui/material'
import { Favorite, Facebook, Twitter } from '@mui/icons-material'
import { MainLayout } from '../../Components'

const Post: NextPage = () => {
  return <MainLayout isImg={false}>
    <Container >
      <Stack marginTop={10} flexDirection='row' alignItems='center' justifyContent='space-between'>
        <Box>
          <Typography variant='h3'>
            Підгорецький замок
            <Stack direction="row" spacing={1} marginTop={1}>
              <Button size="small">#Замки</Button>
              <Button size="small">#Львівщина</Button>
              <Button size="small">#ЗолотаПідковаЛьвівщини</Button>
            </Stack>
          </Typography>
        </Box>
        <Typography variant='body2'>
          27 квітня 2022
        </Typography>
      </Stack>
      <Grid container marginTop={2}>
        <Grid item xs={1}>
          <Stack>
            <IconButton sx={{ width: '40px', margin: '5px auto' }}>
              <Favorite sx={{ color: '#db4454' }} />
            </IconButton>
            <IconButton sx={{ width: '40px', margin: '5px auto' }}>
              <Facebook sx={{ color: '#3b5998' }} />
            </IconButton>
            <IconButton sx={{ width: '40px', margin: '5px auto' }}>
              <Twitter sx={{ color: '#5ea9dd' }} />
            </IconButton>
          </Stack>
        </Grid>
        <Grid item xs={8}>
          <Typography variant='body1'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reiciendis corporis error sunt pariatur blanditiis, cupiditate vitae rem, quam aperiam dicta facilis officia! Veniam assumenda distinctio facilis? Accusamus, eum sunt?
          </Typography>
          <Typography variant='body1'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reiciendis corporis error sunt pariatur blanditiis, cupiditate vitae rem, quam aperiam dicta facilis officia! Veniam assumenda distinctio facilis? Accusamus, eum sunt?
          </Typography>
          <Typography variant='body1'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reiciendis corporis error sunt pariatur blanditiis, cupiditate vitae rem, quam aperiam dicta facilis officia! Veniam assumenda distinctio facilis? Accusamus, eum sunt?
          </Typography>
          <Typography variant='body1'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reiciendis corporis error sunt pariatur blanditiis, cupiditate vitae rem, quam aperiam dicta facilis officia! Veniam assumenda distinctio facilis? Accusamus, eum sunt?
          </Typography>
          <Typography variant='body1'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reiciendis corporis error sunt pariatur blanditiis, cupiditate vitae rem, quam aperiam dicta facilis officia! Veniam assumenda distinctio facilis? Accusamus, eum sunt?
          </Typography>
          <Typography variant='body1'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reiciendis corporis error sunt pariatur blanditiis, cupiditate vitae rem, quam aperiam dicta facilis officia! Veniam assumenda distinctio facilis? Accusamus, eum sunt?
          </Typography>
          <Typography variant='body1'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reiciendis corporis error sunt pariatur blanditiis, cupiditate vitae rem, quam aperiam dicta facilis officia! Veniam assumenda distinctio facilis? Accusamus, eum sunt?
          </Typography>
          <Typography variant='body1'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reiciendis corporis error sunt pariatur blanditiis, cupiditate vitae rem, quam aperiam dicta facilis officia! Veniam assumenda distinctio facilis? Accusamus, eum sunt?
          </Typography>
          <Typography variant='body1'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reiciendis corporis error sunt pariatur blanditiis, cupiditate vitae rem, quam aperiam dicta facilis officia! Veniam assumenda distinctio facilis? Accusamus, eum sunt?
          </Typography>
          <Typography variant='body1'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reiciendis corporis error sunt pariatur blanditiis, cupiditate vitae rem, quam aperiam dicta facilis officia! Veniam assumenda distinctio facilis? Accusamus, eum sunt?
          </Typography>
          <Typography variant='body1'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reiciendis corporis error sunt pariatur blanditiis, cupiditate vitae rem, quam aperiam dicta facilis officia! Veniam assumenda distinctio facilis? Accusamus, eum sunt?
          </Typography>
          <Typography variant='body1'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reiciendis corporis error sunt pariatur blanditiis, cupiditate vitae rem, quam aperiam dicta facilis officia! Veniam assumenda distinctio facilis? Accusamus, eum sunt?
          </Typography>
          <Typography variant='body1'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reiciendis corporis error sunt pariatur blanditiis, cupiditate vitae rem, quam aperiam dicta facilis officia! Veniam assumenda distinctio facilis? Accusamus, eum sunt?
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={2} sx={{ marginLeft: 2, padding: '5px 20px' }}>
            <Typography variant='h6'>Популярні</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  </MainLayout>
}

export default Post