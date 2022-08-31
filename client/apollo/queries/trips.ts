import { gql } from '@apollo/client'
import { Author } from '../variabels'

export const TRIP = gql`
  query trip($tripID: String!) {
    trip(tripID: $tripID) {
      _id
      travelMode
      title
      cover
      small_text
      createdAt
      trip_value {
        distance
        travel_time
        waypoints
      }
      legs {
        distance {
          value
        }
      }
      ${Author}
    }
  }
`

export const TRIPS = gql`
  query trips($input: ParamsTripInput!) {
    trips(input: $input) {
      _id
      title
      cover
      small_text
      travelMode
      views
      likes
      trip_value {
        distance
        travel_time
        waypoints
      }
      createdAt
      ${Author}
    }
  }
`

export const TRIPS_AND_PARAMS = gql`
  query tripsAndParams($input: ParamsTripInput!) {
    tripsAndParams(input: $input) {
      total_trips
      trips {
        _id
        title
        cover
        small_text
        travelMode
        views
        likes
        trip_value {
          distance
          travel_time
          waypoints
        }
      createdAt
      ${Author}
      }
    }
  }
`
