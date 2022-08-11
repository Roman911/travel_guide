import React from 'react'
import { LocationsListComponent } from '../Components'
//import { CircularProgress } from '../../../../'
import type { ILocation } from '../../../types/location'

interface IProps {
  locations?: {
    total_locations: number
    locations: ILocation[]
  }
}

const LocationsList: React.FC<IProps> = ({ locations }) => {
  //if (!data || loading) return <CircularProgress marginTop={6} />

  //if (error) return <h5>Error</h5>

  return <LocationsListComponent data={locations} />
}

export default LocationsList
