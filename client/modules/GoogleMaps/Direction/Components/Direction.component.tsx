import React from 'react'
import { DirectionsRenderer, DirectionsService } from '@react-google-maps/api'

const DirectionComponent: React.FC = () => {
  const [response, setResponse] = React.useState(null)

  const directionsCallback = React.useCallback(res => {
    if (res !== null && res.status === 'OK') {
      //setResponse(res)
    } else {
      console.log('response: ', res)
    }
  }, [])

  const directionsServiceOptions = {
    destination: {
      lat: 49.836299164842785,
      lng: 24.035771245117193,
    },
    origin: {
      lat: 49.036299164842785,
      lng: 25.035771245117193,
    },
    travelMode: 'DRIVING',
  }

  const directionsRendererOptions = React.useMemo(() => {
    return {
      directions: response,
      suppressMarkers: true,
    }
  }, [response])

  return (
    <>
      <DirectionsService
        options={directionsServiceOptions}
        callback={directionsCallback}
      />
      {response && <DirectionsRenderer options={directionsRendererOptions} />}
    </>
  )
}

export default DirectionComponent
