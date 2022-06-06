import { gql } from 'apollo-boost'

export const POSTS = gql`
  query posts($input: ParamsPostInput!) {
    posts(input: $input) {
      _id
      title
      cover
      small_text
      views
      likes
      createdAt
      author {
        name
        avatar
      }
    }
  }
`