import React from "react"
import { Box, Container, Grid, IconButton, Link, Paper, Stack, Step, StepButton, StepLabel, Stepper, Typography, styled } from '@mui/material'
import { Facebook, Favorite, Twitter, Check } from '@mui/icons-material'
import LinkIcon from '@mui/icons-material/Link'
import { useDate } from '../../hooks/useDate'
import { Tags } from '../'

type Props = {
  post: {
    title: string
    tags: string[]
    editor: string
    link: string
    createdAt: string
  }
}

const steps = [
  { label: 'Історичні факти Підгорецького замку' },
  { label: 'Період найбільшого розквіту Підгорецького замку' },
  { label: 'Період занепаду замку' },
  { label: 'Світлий день в історії замку' },
  { label: 'Легенда Підгорецької фортеці' }
]

export const PostComponent: React.FC<Props> = ({ post }) => {
  const { title, tags, editor, link, createdAt } = post
  const [activeStep, setActiveStep] = React.useState(0)

  console.log(link)

  const handleStep = (step: number) => () => {
    setActiveStep(step)
  }

  const QontoStepIconRoot = styled('div')(({ theme, ownerState }: { theme?: any, ownerState: any }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    marginLeft: '8px',
    ...(ownerState.active && {
      color: '#ed2945',
    }),
    '& .QontoStepIcon-circle': {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: 'currentColor',
    },
  }));

  function QontoStepIcon(props: { active: boolean, className: string, completed: boolean }) {
    const { active, completed, className } = props;

    return (
      <QontoStepIconRoot ownerState={{ active }} className={className}>
        {completed ? (
          <Check className="QontoStepIcon-completedIcon" />
        ) : (
          <div className="QontoStepIcon-circle" />
        )}
      </QontoStepIconRoot>
    );
  }

  return <Container >
    <Stack marginTop={10} flexDirection='row' alignItems='center' justifyContent='space-between'>
      <Box>
        <Typography variant='h3' sx={{ color: '#404040' }}>
          {title}
          <Tags tags={tags} />
        </Typography>
      </Box>
      <Typography variant='body2' sx={{ borderRight: '2px solid rgba(0, 0, 0, 0.87)', padding: '4px 6px 4px 0' }}>
        {useDate({ serverDate: createdAt })}
      </Typography>
    </Stack>
    <Grid container marginTop={2}>
      <Grid item xs={1} marginTop={3}>
        <Stack>
          <IconButton sx={{ width: '40px', margin: '5px auto' }}>
            <Favorite sx={{ color: '#db4454' }} />
          </IconButton>
          <IconButton sx={{ width: '40px', margin: '5px auto' }}>
            <Facebook sx={{ color: '#3b5998' }} />
          </IconButton>
          <IconButton sx={{ width: '40px', margin: '5px auto' }}>
            <Twitter sx={{ color: '#5ea9dd' }} />
          </IconButton>
        </Stack>
      </Grid>
      <Grid item xs={8}>
        <Box className='editorWrapper' dangerouslySetInnerHTML={{ __html: editor }} />
        <Link href={link} target='_blank' underline="none" color='#303335' display='flex' sx={{ alignItems: 'center', transition: '300ms', ':hover': { color: '#ed2945' } }}>
          <LinkIcon sx={{ marginRight: 1, transform: 'rotate(25deg)' }} />
          Джерело
        </Link>
      </Grid>
      <Grid item xs={3}>
        <Stepper activeStep={activeStep} nonLinear orientation="vertical" sx={{ padding: 2 }} >
          {
            steps.map((i, index) => {
              return <Step key={index} >
                <StepButton sx={{ fontSize: '12px', padding: '0 8px' }} onClick={handleStep(index)}>
                  <StepLabel StepIconComponent={QontoStepIcon} sx={{ padding: '4px 0' }}>
                    {i.label}
                  </StepLabel>
                </StepButton>
              </Step>
            })
          }
        </Stepper>
        <Paper elevation={2} sx={{ marginLeft: 2, padding: '5px 20px' }}>
          <Typography variant='h6'>Популярні</Typography>
        </Paper>
      </Grid>
    </Grid>
  </Container>
}