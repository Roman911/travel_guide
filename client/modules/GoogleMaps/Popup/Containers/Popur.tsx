import React from 'react'
import { useRouter } from 'next/router'
import { useLazyQuery } from '@apollo/client'
import { PopurComponent } from '../Components'
import { LOCATION_FOR_POPUR } from '../../../../apollo/queries/locations'
import type { ILocation } from '../../types'

interface IProps {
  selected: ILocation | null
  setSelected: (props: null) => void
}

const Popur: React.FC<IProps> = ({ selected, setSelected }) => {
  const router = useRouter()
  const [location, { data }] = useLazyQuery(LOCATION_FOR_POPUR)

  const closeOnClick = () => {
    setSelected(null)
  }

  const editOnClick = () => {
    setSelected(null)
    router.push(`?id=${selected._id}`)
  }

  React.useEffect(() => {
    location({
      variables: {
        locationID: selected._id,
      },
    })
  }, [selected])

  return (
    <PopurComponent
      selected={selected}
      closeOnClick={closeOnClick}
      location={data?.location}
      editOnClick={editOnClick}
    />
  )
}

export default Popur
