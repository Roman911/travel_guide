import React from 'react'
import { useTypedSelector } from '../../../../store/hooks'
import { TopBarComponent } from '../Components'

interface IProps {
  mapRef: any
  setSettlement: any
}

const TopBar: React.FC<IProps> = ({ mapRef, setSettlement }) => {
  const { theme } = useTypedSelector((state) => state.theme)

  return (
    <TopBarComponent
      mapRef={mapRef}
      setSettlement={setSettlement}
      theme={theme}
    />
  )
}

export default TopBar
