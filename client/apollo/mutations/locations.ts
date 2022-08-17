import { gql } from '@apollo/client'

export const CREATE_LOCATION = gql`
  mutation createLocation($input: CreateLocationInput!) {
    createLocation(input: $input) {
      _id
    }
  }
`
