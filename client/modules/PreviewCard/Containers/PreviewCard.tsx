import type { IPost } from '../../../typesScript'
import React from "react"
import { useRouter } from "next/router"
import { useActions } from '../../../store/hooks'
import { useColors, useDate } from '../../../hooks'
import { PreviewCardComponent } from '../Components'

type Props = {
  usedId?: string
  item: IPost
  md?: number
}

export const PreviewCard: React.FC<Props> = ({ usedId, item, md }) => {
  const router = useRouter()
  const { linearProgress } = useActions()
  const { icon, red } = useColors()

  const handleClick = React.useCallback(() => {
    linearProgress(true)
    router.push(`/post/${item._id}`)
  }, [])

  return <PreviewCardComponent usedId={usedId} item={item} handleClick={handleClick} colors={{ icon, red }} useDate={useDate} md={md} />
}