import React from 'react'
import { useAppDispatch } from '../../../hooks'
import { RegionAutocomplete } from '../Components'

interface IProps {
  width?: string
}

export const Regions: React.FC<IProps> = ({ width }) => {
  const redirect = useAppDispatch()

  return <RegionAutocomplete width={width} redirect={redirect} />
}
