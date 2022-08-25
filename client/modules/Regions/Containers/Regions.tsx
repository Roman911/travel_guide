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
    console.log(option)
    setRegion(option)
    setViewport({
      latitude: option ? option.center.lat : 48.6,
      longitude: option ? option.center.lng : 31.48307,
      zoom: option ? 7 : 5.5,
    })
  }, [])

  return <RegionAutocomplete width={width} setOption={setOption} />
}
