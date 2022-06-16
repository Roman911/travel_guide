type Props = {
  email: string,
  _id: string,
  name: string,
  isActivated: boolean,
  avatar: string
}

export class UserDto {
  email: string
  _id: string
  name: string
  isActivated: boolean
  avatar: string

  constructor(model: Props) {
    this.email = model.email
    this._id = model._id
    this.name = model.name
    this.isActivated = model.isActivated
    this.avatar = model.avatar
  }
}