import { gql } from '@apollo/client'

export const LOCATION = gql`
  query location($locationID: String!) {
    location(locationID: $locationID) {
      _id
      title
      small_text
      address
      latitude
      longitude
      isType
      cover
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
        latitude
        longitude
        cover
      }
    }
  }
`

export const LOCATION_FOR_POPUR = gql`
  query location($locationID: String!) {
    location(locationID: $locationID) {
      title
      address
      cover
    }
  }
`
