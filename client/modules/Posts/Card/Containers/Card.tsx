import React from 'react'
import { CardComponent } from '../Components'
import { IPost } from '../../../../types/post'

interface IProps {
  usedId?: string
  item: IPost
  md?: number
}

const Card: React.FC<IProps> = ({ usedId, item, md }) => {
  return <CardComponent />
}

export default Card
