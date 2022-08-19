import React from 'react'
import { useRouter } from 'next/router'
import { useAppDispatch } from '../../../../hooks'
import { PostHomePageComponents } from '../Components'
import { changeLinearProgress } from '../../../../store/reducers/layoutSlice'

interface IProps {
  children: React.ReactNode
  link: string
  linkTitle: string
}

const PostsHomePage: React.FC<IProps> = ({ children, link, linkTitle }) => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const clickToNextPage = () => {
    dispatch(changeLinearProgress(true))
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
