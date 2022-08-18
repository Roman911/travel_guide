import React from 'react'
import { useActions } from '../../../store/hooks'
import { RegionAutocomplete } from '../Components'

interface IProps {
  width?: string
}

export const Regions: React.FC<IProps> = ({ width }) => {
  const { setRegion } = useActions()

  return <RegionAutocomplete width={width} setRegion={setRegion} />
}
