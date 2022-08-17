import React from 'react'
import { useRouter } from 'next/router'
import { useActions } from '../../../../store/hooks'
import { useColors, useDate } from '../../../../hooks'
import { CardComponent } from '../Components'
import { IPost } from '../../../../types/post'

interface IProps {
  usedId?: string
  item: IPost
  md?: number
}

const Card: React.FC<IProps> = ({ usedId, item, md }) => {
  const router = useRouter()
  const { linearProgress } = useActions()
  const { icon, red } = useColors()

  const handleClick = React.useCallback(() => {
    linearProgress(true)
    router.push(`/post/${item._id}`)
  }, [])

  return (
    <CardComponent
      usedId={usedId}
      item={item}
      handleClick={handleClick}
      colors={{ icon, red }}
      useDate={useDate}
      md={md}
    />
  )
}

export default Card
