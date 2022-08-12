export interface ILocation {
  _id: string
  title: string
  small_text: string
  latitude: number
  longitude: number
  isType: string
  address: string
  cover: {
    url: string
  }
}
