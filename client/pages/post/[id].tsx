import type { NextPage } from 'next'
import { GetServerSideProps } from 'next'
import { initializeApollo } from "../../lib/apolloClient"
import { POST } from "../../apollo/queries/posts"
import { MainLayout, PostComponent } from '../../Components'

const Post: NextPage = ({ data: { loading, data } }: any): any => {

  return <MainLayout isImg={false}>
    {data?.post && <PostComponent post={data.post} />}
  </MainLayout>
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const apolloClient = initializeApollo()

  const data = await apolloClient.query({
    query: POST,
    variables: { postID: params?.id }
  })

  return {
    props: { data }
  }
}

export default Post