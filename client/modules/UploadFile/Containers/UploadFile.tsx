import React from 'react'
import { useActions } from '../../../hooks'
import { UploadFileComponent } from '../Components'

interface IProps {
  name: string
  uploadButton: boolean
  setFile: (arg: string | Blob) => void
}

const UploadFile: React.FC<IProps> = ({ name, uploadButton, setFile }) => {
  const { setPreviewImage } = useActions()

  return (
    <UploadFileComponent
      name={name}
      uploadButton={uploadButton}
      setFile={setFile}
      setPreviewImage={setPreviewImage}
    />
  )
}

export default UploadFile
