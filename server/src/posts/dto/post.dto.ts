type Props = {
  _id: string
  editor: string
  type_material: string
  cover: string
  title: string
  tickets: string[]
  link: string
  tags: string[]
  work_time: string
  isType: string
  how_to_get_there: string
  views: number
  likes: string[]
  isPrice: boolean
  confirmed: boolean
  confirm_hash: string
  comments: number
  small_text: string
}

export class PostDto {
  _id: string
  editor: string
  type_material: string
  cover: string
  title: string
  tickets: string[]
  link: string
  tags: string[]
  work_time: string
  isType: string
  how_to_get_there: string
  views: number
  likes: string[]
  isPrice: boolean
  confirmed: boolean
  confirm_hash: string
  comments: number
  small_text: string

  constructor(model: Props) {
    this._id = model._id
    this.editor = model.editor
    this.type_material = model.type_material
    this.cover = model.cover
    this.title = model.title
    this.tickets = model.tickets
    this.link = model.link
    this.tags = model.tags
    this.work_time = model.work_time
    this.isType = model.isType
    this.how_to_get_there = model.how_to_get_there
    this.views = model.views
    this.likes = model.likes
    this.isPrice = model.isPrice
    this.confirmed = model.confirmed
    this.confirm_hash = model.confirm_hash
    this.comments = model.comments
    this.small_text = model.small_text
  }
}