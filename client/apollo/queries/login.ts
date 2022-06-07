import { gql } from 'apollo-boost'

export const LOGIN = gql`
  query login($input: LoginUserInput!) {
    login(input: $input) {
      user {
        id
        name
        email
        avatar
      }
      refreshToken
      accessToken
    }
  }
`