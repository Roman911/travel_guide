import { gql } from '@apollo/client'
import { Author } from '../variabels'

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
      ${Author}
    }
  }
`

export const DIRECTIONS = gql`
  query directions($input: ParamsDirectionInput!) {
    directions(input: $input) {
      _id
      title
      cover
      small_text
      travelMode
      views
      likes
      direction_value {
        distance
        travel_time
        waypoints
      }
      createdAt
      ${Author}
    }
  }
`

export const DIRECTIONS_AND_PARAMS = gql`
  query directionsAndParams($input: ParamsLocationInput!) {
    directionsAndParams(input: $input) {
      total_directions
      directions {
        _id
        title
        isType
        address
        latitude
        longitude
        cover
        ${Author}
      }
    }
  }
`
