import React from 'react'
import { useInView } from 'react-intersection-observer'
import { LocationsListComponent } from '../Components'
import type { ILocation } from '../../../types/location'

interface IProps {
  data?: {
    total_locations: number
    locations: ILocation[]
  }
  loading?: boolean
  setHighlightedId: (id: string | null) => void
  setSelected: (props: ILocation | null) => void
}

const LocationsList: React.FC<IProps> = ({
  data,
  loading,
  setHighlightedId,
  setSelected,
}) => {
  const { ref, inView } = useInView({ threshold: 0 })
  const [page, setPage] = React.useState(1)
  const [locations, setLocations] = React.useState([])

  React.useEffect(() => {
    if (!data) {
      setLocations([])
      setPage(1)
    } else if (data) {
      setLocations(prev => [
        ...prev,
        ...data.locations.slice((page - 1) * 12, page * 12),
      ])
    }
  }, [data, page])

  React.useEffect(() => {
    if (inView && locations.length < data?.locations.length) {
      setPage(prev => prev + 1)
    }
  }, [inView])

  return (
    <LocationsListComponent
      locations={locations}
      total_locations={data?.total_locations}
      loading={loading}
      refm={ref}
      setHighlightedId={setHighlightedId}
      setSelected={setSelected}
    />
  )
}

export default LocationsList
