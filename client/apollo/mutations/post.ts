import { gql } from '@apollo/client'

export const LIKE_POST = gql`
  mutation setLikeForPost($input: LikeInput!) {
    setLikeForPost(input: $input) {
      _id
    }
  }
`
