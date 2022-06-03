import { gql } from 'apollo-boost'

export const REGISTRATION = gql`
  mutation registration($input: RegistrationUserInput!) {
    registration(input: $input) {
      user {
        name
      }
    }
  }
`