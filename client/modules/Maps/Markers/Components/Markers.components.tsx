import React from "react"
import { Marker, MarkerClusterer } from '@react-google-maps/api'

type Props = {
  settlement?: google.maps.LatLngLiteral
  locations?: {
    _id: string
    coordinates: string[]
    isType: string
  }[]
  openDrawerGM: (locationID: string) => void
}

export const MarkersComponent: React.FC<Props> = ({ locations, settlement, openDrawerGM }) => {
  return <>
    {
      locations && <MarkerClusterer >
      {(clusterer) =>
      //@ts-ignore
      locations?.map(i => {
        const [lat, lng] = i.coordinates
        return <Marker
          key={i._id}
          position={{ lat: Number(lat), lng: Number(lng) }}
          clusterer={clusterer}
          onClick={() => openDrawerGM(i._id)}
          icon={{
            url: `/static/images/${i.isType}.png`
          }}
        />
      })}
      </MarkerClusterer>
    }
    {
      settlement && <Marker position={settlement} />
    }
  </>
}