import { gql } from '@apollo/client'

export const LOGIN = gql`
  query login($input: LoginUserInput!) {
    login(input: $input) {
      user {
        _id
        name
        email
        avatars
      }
      refreshToken
      accessToken
    }
  }
`
