import type { IPost } from '../../../typesScript'
import React from "react"
import { useRouter } from 'next/router'
import { useInView } from 'react-intersection-observer'
import { useActions } from '../../../store/hooks'
import { useColors, useDate } from '../../../hooks'
import { PostComponent } from '../Components'

export interface IProps {
  post: IPost
}

const steps = [
  { label: 'Історичні факти Підгорецького замку' },
  { label: 'Період найбільшого розквіту Підгорецького замку' },
  { label: 'Період занепаду замку' },
  { label: 'Світлий день в історії замку' },
  { label: 'Легенда Підгорецької фортеці' }
]

export const PostContainer: React.FC<IProps> = ({ post }) => {
  const router = useRouter()
  const { linearProgress } = useActions()
  const { ref, inView } = useInView({ threshold: 0 })
  const { darkGray, icon } = useColors()
  const style = inView ? { position: 'absolute', top: 'auto' } : { position: 'fixed', top: '100px' }

  const handleClickToUser = (userId: string) => {
    linearProgress(true)
    router.push(`/profile/${userId}`)
  }

  return <PostComponent
    post={post}
    steps={steps}
    refm={ref}
    style={style}
    useDate={useDate}
    colors={{ darkGray, icon }}
    handleClickToUser={handleClickToUser}
  />
}