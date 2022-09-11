import React from 'react'
import { useRouter } from 'next/router'
import { useLazyQuery } from '@apollo/client'
import { useTypedSelector } from '../../../../hooks'
import { PopurComponent } from '../Components'
import { LOCATION_FOR_POPUR } from '../../../../apollo/queries/locations'
import type { ILocation } from '../../types'

const Popur: React.FC = () => {
  const router = useRouter()
  const { selected } = useTypedSelector(state => state.googleMap)
  const [location, { data }] = useLazyQuery(LOCATION_FOR_POPUR)

  const closeOnClick = () => {
    //setSelected(null)
  }

  const editOnClick = () => {
    //setSelected(null)
    //router.push(`?id=${selected._id}`)
  }

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
