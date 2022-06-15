export interface IUserData {
  _id: string
  name: string
  email: string
  avatar?: string
  rating: number
}

export interface IUser {
  userData: IUserData
  refreshToken: string
  accessToken: string
}