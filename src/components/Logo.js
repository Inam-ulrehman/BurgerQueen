import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'

const Logo = () => {
  return (
    <Wrapper>
      <Link to={'/'}>
        <Typography
          variant='h5'
          sx={{ display: 'inline', color: 'secondary.main' }}
        >
          Burger
        </Typography>
        <Typography
          sx={{ display: 'inline', color: 'primary.light' }}
          variant='h5'
        >
          Queen
        </Typography>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div``
export default Logo
