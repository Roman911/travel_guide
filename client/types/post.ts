import { IUserData } from '.'

export interface IPost {
  _id: string
  title: string
  tags: string[]
  small_text: string
  cover: string
  editor: string
  link: string
  likes: string[]
  views: number
  createdAt: string
  author: IUserData
}