import React from 'react'
import { useTypedSelector } from '../../../../hooks'
import { CreatePostComponent } from '../Components'

const CreatePost: React.FC = () => {
  const { previewImage } = useTypedSelector(state => state.uploadFile)
  const [file, setFile] = React.useState<string | File>('')
  const [typeMaterial, setTypeMaterial] = React.useState<{
    label: string
    id: string
  } | null>({
    label: 'Новини',
    id: 'new',
  })

  console.log(typeMaterial)

  return (
    <CreatePostComponent
      previewImage={previewImage}
      typeMaterial={typeMaterial}
      setFile={setFile}
      setTypeMaterial={setTypeMaterial}
    />
  )
}

export default CreatePost
