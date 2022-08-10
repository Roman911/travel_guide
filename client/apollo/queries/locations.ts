import { gql } from 'apollo-boost'

export const ALL_LOCATIONS = gql`
  query locations($input: ParamsAllLocationInput!) {
    locations(input: $input) {
      _id
      coordinates
      isType
    }
  }
`

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

export const LOCATION_FOR_POPUR = gql`
  query location($locationID: String!) {
    location(locationID: $locationID) {
      title
      address
      cover {
        url
      }
    }
  }
`

export const LOCATIONS_SORT_BY_ID = gql`
  query locationsSortById($_id: [ID]) {
    locationsSortById(_id: $_id) {
      _id
      coordinates
      isType
    }
  }
`

export const LOCATIONS_AND_PARAMS = gql`
  query locationsAndParams($input: ParamsLocationInput!) {
    locationsAndParams(input: $input) {
      page
      total_pages
      total_locations
      locations {
        _id
        title
        isType
        address
        cover {
          url
        }
      }
    }
  }
`
