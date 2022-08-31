import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const img =
  'https://firebasestorage.googleapis.com/v0/b/burger-queen-6b0d2.appspot.com/o/computer_800x800.png?alt=media&token=d5928224-e835-4e72-8e8a-878eef8906df'

const LandingPageOne = () => {
  return (
    <Wrapper>
      <div className='box-1'>
        <img src={img} alt='' />
        <Link className='btns' to={'/products'}>
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
  background-color: #ff872e;
  overflow: hidden;

  .box-1 {
    overflow: hidden;

    img {
      width: 100%;
    }
    .btns {
      position: absolute;
      top: 80%;
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
