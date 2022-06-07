import { gql } from 'apollo-boost'
import { Author } from '../variabels'

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

export const POST = gql`
  query post($postID: String!) {
  post(postID: $postID){
    _id
    title
    tags
    editor
    link
    createdAt
    ${Author}
  }
}
`