import { gql } from 'apollo-boost'

export const LIKE_POST = gql`
  mutation setLikeForPost($input: LikeInput!){
  setLikeForPost(input:$input){
    _id
  }
}
`