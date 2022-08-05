import React from 'react'
import { useLazyQuery } from '@apollo/client'
import { LocationsListComponent } from '../Components'
import { CircularProgress } from '../../../../'
import { LOCATIONS_AND_PARAMS } from '../../../../../apollo/queries/locations'

const LocationsList: React.FC = () => {
  const [locationsAndParams, { loading, error, data }] =
    useLazyQuery(LOCATIONS_AND_PARAMS)

  React.useEffect(() => {
    locationsAndParams({
      variables: {
        input: {
          page: 1,
          limit: 12,
          types: [],
        },
      },
    })
  }, [])

  if (!data || loading) return <CircularProgress marginTop={6} />

  if (error) return <h5>Error</h5>

  return <LocationsListComponent data={data?.locationsAndParams} />
}

export default LocationsList
