import React from 'react'
import { Link } from 'react-router-dom'
// import { category } from '../../utils/sampleData'

import BackgroundImage from '../../../src/images/Home.png'
import burger from '../../../src/images/burger.jpg'
import styled from 'styled-components'

const LandingPage1 = () => {
  return (
    <Wrapper>
      <div className='image-holder'>
        <div className='box1'>
          <h4 className='title'>Beef burger</h4>
          <div className='title-underline'></div>
          <div className='Link-holder'>
            <Link className='orderLink btn' to={'products'}>
              Menu
            </Link>
          </div>
        </div>
        <div className='box2'></div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .image-holder {
    background: url(${BackgroundImage});
    background-size: cover;
    background-position: center;
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    height: calc(100vh - 88px);
  }

  @media (max-width: 768px) {
    .image-holder {
      max-height: 40vh;
      .box1,
      .box2 {
        max-height: 40vh;
      }
    }
  }
  .box1 {
    .title {
      color: var(--primary-9);
      margin-top: 4rem;
    }
    .Link-holder {
      text-align: center;
      margin-top: 1rem;
    }
  }
  @media (min-width: 768px) {
    .box1 {
      .title {
        margin-top: 13rem;
        font-size: 3rem;
      }
    }
  }

  /* ========Box-2========= */
  .box2 {
    background: url(${burger});
    background-position: center;
    background-size: cover;
    overflow: hidden;
    /* display: grid;
    place-content: center; */
    /* img {
      max-height: 100px;
      border: 2px solid black;
    } */
  }
`
export default LandingPage1
