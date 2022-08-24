import React from 'react'
import { Stack, Typography } from '@mui/material'
import { UploadFile } from '../../../../../'

interface IProps {
  avatars?: string[]
  setFile: (arg: File | string) => void
}

const MainComponents: React.FC<IProps> = ({ avatars, setFile }) => {
  return (
    <>
      <UploadFile
        name="Завантажити світлину"
        uploadButton={false}
        setFile={setFile}
      />
      <Typography variant="h6" marginTop={2} marginBottom={2}>
        Основні світлини
      </Typography>
      {avatars?.length !== 0 && (
        <Stack direction="row" spacing={1}>
          {avatars?.map((i, index) => {
            return (
              <img
                key={index}
                width="104px"
                height="104px"
                style={
                  index === 0
                    ? {
                        borderTopLeftRadius: '8px',
                        borderBottomLeftRadius: '8px',
                      }
                    : {}
                }
                src={`${process.env.NEXT_APP_HOST_API}images/${i}`}
                alt=""
              />
            )
          })}
        </Stack>
      )}
    </>
  )
}

export default MainComponents
