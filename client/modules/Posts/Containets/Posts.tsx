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
  posts?: IPost[]
}

const Posts: React.FC<IProps> = ({ home, layout }) => {
  return (
    <Layouts home={home} layout={layout}>
      <PostsComponent />
    </Layouts>
  )
}

export default Posts
