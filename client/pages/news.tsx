import type { NextPage } from 'next'
import { NewsPage, Posts } from '../modules'
import { MainLayout } from '../Components'

const News: NextPage = () => {
  return (
    <MainLayout>
      <NewsPage />
    </MainLayout>
  )
}

export default News
