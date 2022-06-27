import React from "react"
import { GoogleMap, Marker, DirectionsRenderer, Circle, MarkerClusterer } from '@react-google-maps/api'
import { Box, Grid, Paper, Typography } from '@mui/material'

type Props = {
  center: google.maps.LatLngLiteral
  options: google.maps.MapOptions
  onLoad: any
  settlement?: google.maps.LatLngLiteral
  locations?: {
    _id: string
    coordinates: string[]
    isType: string
  }[]
}

export const MapsComponents: React.FC<Props> = ({ center, options, onLoad, settlement, locations }) => {
  return <GoogleMap
    zoom={6}
    center={center}
    mapContainerStyle={{ width: '100%', height: 'calc(100vh - 64px)' }}
    options={options}
    onLoad={onLoad}
  >
    {
      locations && <MarkerClusterer >
        {(clusterer) => locations.map(i => {
          const [ lat, lng ] = i.coordinates
          return <Marker
            key={i._id}
            clusterer={clusterer}
            position={{lat: Number(lat), lng: Number(lng)}}
            icon={{
              url: `/static/images/${i.isType}.png`
            }}
          />
        })}
      </MarkerClusterer>
    }
    {
      locations.map(i => {
        const [ lat, lng ] = i.coordinates
        return <Marker
          key={i._id}
          position={{lat: Number(lat), lng: Number(lng)}}
          icon={{
            url: `/static/images/${i.isType}.png`
          }}
        />
      })
    }
    {
      settlement && <Marker position={settlement} />
    }
  </GoogleMap>
}

function createKey(location: { lat: number; lng: number }): React.Key {
  throw new Error("Function not implemented.")
}
