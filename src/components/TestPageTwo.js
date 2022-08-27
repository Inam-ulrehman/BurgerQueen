import * as React from 'react'

import {
  Box,
  Grid,
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from '@mui/material/'

import { landingTwo } from '../utils/data'
import { Link } from 'react-router-dom'

const TestPageTwo = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <hr />
      <Grid container justifyContent='center' spacing={2}>
        {landingTwo.map((item, index) => {
          const { paragraph, path, image, buttonTitle } = item
          return (
            <Card key={index} xs={12} md={6} sx={{ maxWidth: 340, m: 2 }}>
              <CardMedia
                component='img'
                height='140'
                image={image}
                alt='burger'
              />
              <CardContent>
                <Typography variant='body2'>{paragraph}</Typography>
              </CardContent>
              <CardActions>
                <Button variant='outlined'>
                  <Link to={path}>{buttonTitle}</Link>
                </Button>
              </CardActions>
            </Card>
          )
        })}
      </Grid>
    </Box>
  )
}

export default TestPageTwo
