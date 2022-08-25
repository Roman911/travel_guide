import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import { UploadFile } from '../../../../../'
import { CircularProgress } from '../../../../../'
import { useStyleBorderRadius } from './useStyleBorderRadius'

interface IProps {
  allAvatars: boolean
  avatars?: string[]
  avatarsLength?: number
  setAllAvatars: (arg: boolean) => void
  setFile: (arg: File | string) => void
}

const MainComponents: React.FC<IProps> = ({
  allAvatars,
  avatars,
  avatarsLength,
  setAllAvatars,
  setFile,
}) => {
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
      {avatars ? (
        avatars.length !== 0 && (
          <Box>
            <Grid container spacing={1} columns={10}>
              {avatars?.map((i, index) => {
                return (
                  <Grid key={index} xs={2} item>
                    <img
                      width="100%"
                      style={useStyleBorderRadius(
                        allAvatars,
                        avatarsLength,
                        index
                      )}
                      src={`${process.env.NEXT_APP_HOST_API}images/${i}`}
                      alt=""
                    />
                  </Grid>
                )
              })}
            </Grid>
            {!allAvatars && avatarsLength > 5 && (
              <Button
                fullWidth
                variant="contained"
                sx={{ marginTop: 4, marginBottom: 2 }}
                onClick={() => setAllAvatars(true)}
              >
                Більше
              </Button>
            )}
          </Box>
        )
      ) : (
        <CircularProgress marginTop={2} />
      )}
    </>
  )
}

export default MainComponents
