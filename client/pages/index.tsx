import type { NextPage } from 'next'
import { Box } from '@mui/material'
import { Article, MainLayout, News } from '../Components'

const Home: NextPage = () => {
  const articles = ['1', '2', '3', '4']

  return <MainLayout isImg={true}>
    <Box marginTop='50px'>
      <News title='Новини' link='/news' linkTitle='Більше новин' >
        {
          articles.map(i => {
            return <Article key={i} />
          })
        }
      </News>
      <News title='Маршрути' link='/routes' linkTitle='Більше маршрутів'>
        {
          articles.map(i => {
            return <Article key={i} />
          })
        }
      </News>
    </Box>
  </MainLayout>
}

export default Home
