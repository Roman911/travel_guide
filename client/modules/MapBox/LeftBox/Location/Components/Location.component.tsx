import React from 'react'
import type { ILocation } from '../../../types/location'

interface IProps {
  data: ILocation
}

const LocationComponent: React.FC<IProps> = ({ data }) => {
  console.log(data)

  return <div>LocationComponent</div>
}

export default LocationComponent
