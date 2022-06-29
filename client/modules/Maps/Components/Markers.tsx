import React from "react"
import { Marker, MarkerClusterer } from '@react-google-maps/api'

type Props = {
  settlement?: google.maps.LatLngLiteral
  locations?: {
    _id: string
    coordinates: string[]
    isType: string
  }[]
}

export const Markers: React.FC<Props> = ({ locations, settlement }) => {
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