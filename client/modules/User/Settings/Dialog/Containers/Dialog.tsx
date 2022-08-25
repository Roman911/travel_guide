import React from 'react'
import { useMutation } from '@apollo/client'
import { Box } from '@mui/material'
import { useActions, useTypedSelector } from '../../../../../hooks'
import { DialogComponent } from '../Components'
import { uploadFileAPI } from '../../../../../store/reducers/uloadFileSlice'
import { UPDATE_USER_AVATAR } from '../../../../../apollo/mutations/user'

interface IProps {
  isOpen: boolean
  handleClose: () => void
}

const Dialog: React.FC<IProps> = ({ isOpen, handleClose }) => {
  const [createFile, {}] = uploadFileAPI.useCreateFileMutation()
  const { refreshToken } = useTypedSelector(state => state.user)
  const { changeLinearProgress, updateAvatar } = useActions()
  const [updateUserAvatar] = useMutation(UPDATE_USER_AVATAR)
  const [file, setFile] = React.useState<File | string>('')
  const [isDisabled, setDisabled] = React.useState<boolean>(false)

  const editor = React.useRef(null)

  const onSubmit = async () => {
    changeLinearProgress(true)
    setDisabled(true)
    //const options = editor.current.getImage().toDataURL()

    await createFile({ url: '/avatar', file } as {
      url: string
      file: string | File
    })
      .then((data: any) => {
        updateAvatar(data.data.image)
        updateUserAvatar({
          variables: {
            input: {
              avatar: data.data.image,
              token: refreshToken,
            },
          },
        }).then(data => {
          setFile('')
          handleClose()
        })
      })
      .catch(e => console.log(e))
      .finally(() => {
        changeLinearProgress(false)
        setDisabled(false)
      })
  }

  const handleCansel = () => {
    setFile('')
  }

  return (
    <Box>
      <DialogComponent
        file={file}
        isDisabled={isDisabled}
        isOpen={isOpen}
        handleCansel={handleCansel}
        handleClose={handleClose}
        onSubmit={onSubmit}
        setFile={setFile}
        editor={editor}
      />
    </Box>
  )
}

export default Dialog
