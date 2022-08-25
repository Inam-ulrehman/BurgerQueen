import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'

const Logo = () => {
  return (
    <Wrapper>
      <Link to={'/'}>
        <Typography
          variant='h3'
          sx={{ display: 'inline', color: 'secondary.main' }}
        >
          Burger
        </Typography>
        <Typography
          sx={{ display: 'inline', color: 'primary.main' }}
          variant='h3'
        >
          Queen
        </Typography>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div``
export default Logo
