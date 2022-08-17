import React from 'react'
import { useRouter } from 'next/router'
import { useActions } from '../../../../store/hooks'
import { PostHomePageComponents } from '../Components'

interface IProps {
  children: React.ReactNode
  link: string
  linkTitle: string
}

const PostsHomePage: React.FC<IProps> = ({ children, link, linkTitle }) => {
  const router = useRouter()
  const { linearProgress } = useActions()
  const clickToNextPage = () => {
    linearProgress(true)
    router.push(link)
  }

  return (
    <PostHomePageComponents
      linkTitle={linkTitle}
      clickToNextPage={clickToNextPage}
    >
      {children}
    </PostHomePageComponents>
  )
}

export default PostsHomePage
