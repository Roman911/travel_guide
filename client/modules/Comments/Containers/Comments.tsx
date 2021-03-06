import React from "react"
import { useQuery } from "@apollo/client"
import { commentsQuery } from "./querys"
import { CreateComment } from "./CreateComment"
import { ShowAllComments } from "./ShowAllComments"
import { Loading } from "../../../Components"

type CommentsProps = {
  id: string
}

const Comments: React.FC<CommentsProps> = ({ id }): any => {
  const { loading, error, data } = useQuery( commentsQuery, {
    variables: { postId: id }
  })
  if (loading) return <Loading />
  if (error) return `Error! ${error}`
  const { comments } = data
  const commentsReverse = comments.reverse()
  return <>
    <h3>КОМЕНТАРІ</h3>
    <CreateComment postId={ id } isFirstComment={ true } />
    <ShowAllComments comments={ commentsReverse } postId={ id } />
  </>
}

export default Comments