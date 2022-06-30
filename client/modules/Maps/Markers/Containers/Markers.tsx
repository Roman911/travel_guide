import React from "react"
import { useActions } from '../../../../store/hooks'
import { MarkersComponent } from '../Components'

type Props = {
  settlement?: google.maps.LatLngLiteral
  locations?: {
    _id: string
    coordinates: string[]
    isType: string
  }[]
}

export const Markers: React.FC<Props> = ({ locations, settlement }) => {
  const { openDrawerGM } = useActions()

  return <MarkersComponent locations={locations} settlement={settlement} openDrawerGM={openDrawerGM} />
}