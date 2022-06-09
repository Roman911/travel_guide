import React from "react"
import { useTypedSelector } from '../../../store/hooks/useTypedSelector'
import { CommentsComponent } from '../Components'

export const Comments: React.FC = () => {
  const { userData } = useTypedSelector(state => state.user)
  const comments = null

  return <CommentsComponent comments={comments} userData={userData} />
}