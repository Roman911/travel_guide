import { gql } from 'apollo-boost'

export const POSTS = gql`
  query posts($input: ParamsPostInput!) {
    posts(input: $input) {
      _id
      cover
      small_text
    }
  }
`