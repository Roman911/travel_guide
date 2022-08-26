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
  const { setRegion, setViewport, setViewportSeeMap } = useActions()

  const setOption = React.useCallback((option: IRegionOption | null) => {
    console.log(option)
    setRegion(option)
    option
      ? setViewport({
          latitude: option.center.lat,
          longitude: option.center.lng,
          zoom: 7,
        })
      : setViewportSeeMap()
  }, [])

  return <RegionAutocomplete width={width} setOption={setOption} />
}
