import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import image2 from '../../images/homepage.png'

const LandingPageOne = () => {
  return (
    <Wrapper>
      <div className='box-1'>
        <img src={image2} alt='' />
        <Link className='btn' to={'/products'}>
          <Button variant='contained'>Order Online</Button>
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  background: var(--primary-8);
  overflow: hidden;

  .box-1 {
    overflow: hidden;

    img {
      width: 100%;
    }
    .btn {
      position: absolute;
      top: 70%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  @media (min-width: 600px) {
  }
  @media (min-width: 768px) {
    img {
      margin-top: 5rem;
    }
  }
  @media (min-width: 900px) {
  }
  @media (min-width: 1120px) {
  }
`

export default LandingPageOne
