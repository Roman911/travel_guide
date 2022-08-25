import React from 'react'
import { useActions } from '../../../hooks'
import { RegionAutocomplete } from '../Components'

interface IRegionOption {
  label: string
  center: { lat: number; lng: number }
}

interface IProps {
  width?: string
}

export const Regions: React.FC<IProps> = ({ width }) => {
  const { setRegion, setViewport } = useActions()

  const setOption = React.useCallback((option: IRegionOption | null) => {
    setRegion(option)
    setViewport({
      latitude: option ? option.center.lat : 44.6,
      longitude: option ? option.center.lng : 25.48307,
      zoom: 12,
    })
  }, [])

  return <RegionAutocomplete width={width} setOption={setOption} />
}
