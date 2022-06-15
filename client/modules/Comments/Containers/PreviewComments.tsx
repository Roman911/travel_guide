import React from "react"
import { useQuery } from "@apollo/react-hooks"
import { CircularProgress } from '@mui/material'
import { COMMENTS_FOR_POST } from '../../../apollo/queries/comments'
import { PreviewCommentsComponent } from '../Components'
import { useColors } from '../../../hooks'

interface IProps {
  postId: string
}

export const PreviewComments: React.FC<IProps> = ({ postId }) => {
  const { loading, error, data } = useQuery(COMMENTS_FOR_POST, { variables: { postId } })
  const { icon } = useColors()

  if (!loading) <CircularProgress size={14} sx={{ marginLeft: 1 }} />

  return <PreviewCommentsComponent data={data} icon={icon} />
} 