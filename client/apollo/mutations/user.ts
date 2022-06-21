import { gql } from 'apollo-boost'

export const UPDATE_USER = gql`
  mutation updateUser($input: UpdateUserInput!){
    updateUser(input:$input){
      user {
        _id
        name
        email
        avatar
      }
      refreshToken
      accessToken
  }
}
`