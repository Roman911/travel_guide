import React from 'react'
import { Layouts } from '../'
import { PostsComponent } from '../Components'
import { IPost } from '../../../types/post'

interface IProps {
  home: boolean
  layout: {
    title: string
    link?: string
    linkTitle?: string
  }
  loading?: boolean
  numberPosts: number
  posts?: IPost[]
}

const Posts: React.FC<IProps> = ({
  home,
  layout,
  loading,
  numberPosts,
  posts,
}) => {
  return (
    <Layouts home={home} layout={layout}>
      <PostsComponent
        loading={loading}
        numberPosts={numberPosts}
        posts={posts}
      />
    </Layouts>
  )
}

export default Posts
