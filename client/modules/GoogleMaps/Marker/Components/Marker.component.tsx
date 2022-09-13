import React from 'react'
import { Marker, MarkerClusterer } from '@react-google-maps/api'
import type { ILocation } from '../../../../types/googleMap'

interface IProps {
  latLng?: google.maps.LatLngLiteral
  locations?: ILocation[]
  handleOpenPopur: (location: ILocation | null) => void
  highlightedId: string | null
  type: string
}

const MarkerComponent: React.FC<IProps> = ({
  locations,
  latLng,
  handleOpenPopur,
  highlightedId,
  type,
}) => {
  return (
    <>
      {locations && (
        <MarkerClusterer>
          {clusterer =>
            //@ts-ignore
            locations?.map(i => {
              return (
                <Marker
                  key={i._id}
                  position={{ lat: i.latitude, lng: i.longitude }}
                  clusterer={clusterer}
                  icon={{
                    url: `/static/images/${i.isType}${
                      highlightedId === i._id ? '-hover' : ''
                    }.webp`,
                  }}
                  onClick={() => handleOpenPopur(i)}
                />
              )
            })
          }
        </MarkerClusterer>
      )}
      {latLng && (
        <Marker
          position={latLng}
          icon={{
            url: `/static/images/${type}-hover.webp`,
          }}
        />
      )}
    </>
  )
}

export default MarkerComponent
