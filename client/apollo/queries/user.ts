import { gql } from '@apollo/client'

export const USER = gql`
  query user($userID: String!) {
    user(userID: $userID) {
      _id
      name
      aboutMy
      avatar
      rating
      socials {
        facebook
        instagram
        twitter
        youtube
      }
    }
  }
`

export const USER_AVATARS = gql`
  query user($userID: String!) {
    user(userID: $userID) {
      avatars
    }
  }
`
