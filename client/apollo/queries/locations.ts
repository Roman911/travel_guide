import { gql } from 'apollo-boost'

export const LOCATION = gql`
  query location($locationID: String!) {
    location(locationID: $locationID) {
      _id
      title
      small_text
      address
      coordinates
      isType
      cover {
        url
      }
    }
  }
`

export const LOCATIONS = gql`
  query locations($input: ParamsLocationInput!) {
    locations(input: $input) {
      total_locations
      locations {
        _id
        title
        isType
        address
        coordinates
        cover {
          url
        }
      }
    }
  }
`
