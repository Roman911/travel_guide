import { gql } from 'apollo-boost'

export const USER = gql`
  query user($userID: String!){
  user(userID: $userID){
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