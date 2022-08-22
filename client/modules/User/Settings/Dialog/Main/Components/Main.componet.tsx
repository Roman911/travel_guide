import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { Button, ButtonProps, Stack, Typography, styled } from '@mui/material'

interface IProps {
  handleClick: () => void
}

const UploadButton = styled(Button)<ButtonProps>(({ theme }) => ({
  border: '2px dashed',
  borderColor: theme.palette.text.primary,
  color: theme.palette.text.primary,
  borderRadius: 0,
  opacity: 0.7,
  '&:hover': {
    border: '2px dashed',
    borderColor: theme.palette.text.primary,
  },
}))

const MainComponents: React.FC<IProps> = ({ handleClick }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <>
      <Controller
        name="uploadFile"
        control={control}
        render={({ field }) => (
          <UploadButton
            {...field}
            variant="outlined"
            //@ts-ignore
            component="label"
          >
            Завантажити світлину
            <input
              hidden
              accept="image/*"
              multiple
              type="file"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setFile(event?.target?.files?.[0])
                if (event?.target?.files?.[0]) {
                  const file = event.target.files[0]
                  const reader = new FileReader()
                  reader.onloadend = () => {
                    setPreviewImage(reader.result as string)
                  }
                  reader.readAsDataURL(file)
                }
              }}
            />
          </UploadButton>
        )}
      />
      <Typography variant="h6" marginTop={2} marginBottom={2}>
        Основні світлини
      </Typography>
      <Stack direction="row" spacing={1}>
        <img
          width="104px"
          height="104px"
          style={{
            borderTopLeftRadius: '8px',
            borderBottomLeftRadius: '8px',
          }}
          src="https://scontent-frx5-1.xx.fbcdn.net/v/t1.6435-9/59777662_2288353538149940_2722857180872048640_n.jpg?stp=dst-jpg_p110x80&_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pr_35TXEv7wAX8i1EXN&tn=77xrR_p_moFmUlN9&_nc_ht=scontent-frx5-1.xx&oh=00_AT-wCAqWP5inSPmxpn1qRQlh2pJqcfVdvpoI6jiyibb4Bw&oe=62D786C5"
          alt=""
        />
        <img
          width="104px"
          height="104px"
          src="https://scontent-frx5-1.xx.fbcdn.net/v/t1.6435-9/59777662_2288353538149940_2722857180872048640_n.jpg?stp=dst-jpg_p110x80&_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pr_35TXEv7wAX8i1EXN&tn=77xrR_p_moFmUlN9&_nc_ht=scontent-frx5-1.xx&oh=00_AT-wCAqWP5inSPmxpn1qRQlh2pJqcfVdvpoI6jiyibb4Bw&oe=62D786C5"
          alt=""
        />
        <img
          width="104px"
          height="104px"
          src="https://scontent-frx5-1.xx.fbcdn.net/v/t1.6435-9/59777662_2288353538149940_2722857180872048640_n.jpg?stp=dst-jpg_p110x80&_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pr_35TXEv7wAX8i1EXN&tn=77xrR_p_moFmUlN9&_nc_ht=scontent-frx5-1.xx&oh=00_AT-wCAqWP5inSPmxpn1qRQlh2pJqcfVdvpoI6jiyibb4Bw&oe=62D786C5"
          alt=""
        />
        <img
          width="104px"
          height="104px"
          src="https://scontent-frx5-1.xx.fbcdn.net/v/t1.6435-9/59777662_2288353538149940_2722857180872048640_n.jpg?stp=dst-jpg_p110x80&_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pr_35TXEv7wAX8i1EXN&tn=77xrR_p_moFmUlN9&_nc_ht=scontent-frx5-1.xx&oh=00_AT-wCAqWP5inSPmxpn1qRQlh2pJqcfVdvpoI6jiyibb4Bw&oe=62D786C5"
          alt=""
        />
        <img
          width="104px"
          height="104px"
          style={{
            borderTopRightRadius: '8px',
            borderBottomRightRadius: '8px',
          }}
          src="https://scontent-frx5-1.xx.fbcdn.net/v/t1.6435-9/59777662_2288353538149940_2722857180872048640_n.jpg?stp=dst-jpg_p110x80&_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pr_35TXEv7wAX8i1EXN&tn=77xrR_p_moFmUlN9&_nc_ht=scontent-frx5-1.xx&oh=00_AT-wCAqWP5inSPmxpn1qRQlh2pJqcfVdvpoI6jiyibb4Bw&oe=62D786C5"
          alt=""
        />
      </Stack>
    </>
  )
}

export default MainComponents
