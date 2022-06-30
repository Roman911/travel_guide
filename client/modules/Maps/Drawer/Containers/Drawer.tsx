import React from "react"
import { useLazyQuery } from '@apollo/client'
import { useActions, useTypedSelector } from '../../../../store/hooks'
import { DrawerComponent } from '../Components'
import { LOCATION } from '../../../../apollo/queries/locations'

export const Drawer: React.FC = () => {
  const { drawerIsOpen, locationID } = useTypedSelector(state => state.drawerGM)
  const { closeDrawerGM } = useActions()
  const [location, { loading, error, data }] = useLazyQuery(LOCATION)

  React.useEffect(() => {
    if (locationID.length !== 0) location({ variables: { locationID } })
  }, [locationID])

  return <DrawerComponent isOpen={drawerIsOpen} closeDrawerGM={closeDrawerGM} location={data?.location} loading={loading} />
}