import React from 'react'
import { useFormContext } from 'react-hook-form'
import { useActions, useTypedSelector } from '../../../../hooks'
import { CreatePostComponent } from '../Components'

const CreatePost: React.FC = () => {
  const [file, setFile] = React.useState<string | File>('')
  const { setValue } = useFormContext()
  const {
    createPost,
    uploadFile: { previewImage },
    user: { userData },
  } = useTypedSelector(state => state)
  const { setTypeMaterial } = useActions()

  React.useEffect(() => {
    setValue('type_material', createPost.type_material)
    if (createPost.title) {
      setValue('title', createPost.title)
      setValue('small_text', createPost.small_text)
    }
  }, [createPost])

  return (
    <CreatePostComponent
      previewImage={previewImage}
      typeMaterial={createPost.type_material}
      setFile={setFile}
      setTypeMaterial={setTypeMaterial}
      userData={userData}
    />
  )
}

export default CreatePost
