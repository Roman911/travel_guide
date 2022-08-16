import React from 'react'
import { Box, Grid } from '@mui/material'
import { Card, CardSkeleton } from '../Card'
import { IPost } from '../../../types/post'

interface IProps {
  loading?: boolean
  numberPosts: number
  posts?: IPost[]
}

const PostsComponent: React.FC<IProps> = ({ loading, numberPosts, posts }) => {
  const postsSkeleton = [...Array(numberPosts)].map((i, index) => {
    return <CardSkeleton key={index} />
  })

  const postsMap = posts?.map(i => {
    return <Card key={i._id} item={i} usedId={'usedId'} md={3} />
  })

  return (
    <Box>
      <Grid
        container
        alignItems="center"
        marginTop="-35px"
        flexDirection={{ xs: 'column', sm: 'column', md: 'row' }}
        padding={{ xs: '0', sm: '0', md: '0 10px' }}
      >
        {posts ? postsMap : postsSkeleton}
      </Grid>
    </Box>
  )
}

export default PostsComponent
