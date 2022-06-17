import type { NextPage } from 'next'
import type { IPost } from '../../typesScript/post'
import { GetServerSideProps } from 'next'
import { initializeApollo } from "../../lib/apolloClient"
import { POST } from "../../apollo/queries/posts"
import { PostContainer } from '../../modules'
import { MainLayout, PostSkeleton } from '../../Components'

interface IProps {
  data: {
    loading: boolean
    data: {
      post: IPost
    }
  }
}

const Post: NextPage<IProps> = ({ data: { loading, data } }) => {

  return <MainLayout>
    {data ? <PostContainer post={data.post} /> : <PostSkeleton />}
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