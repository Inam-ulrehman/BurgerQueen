import React from 'react'
import { Link } from 'react-router-dom'
// import { category } from '../../utils/sampleData'

import burger from '../../../src/images/burger.jpg'
import delivery from '../../../src/images/delivery.png'
import styled from 'styled-components'

const LandingPageOne = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='box1'>
          <img src={burger} alt='' />
        </div>
        <div className='box2'>
          <h1>burger seller</h1>
          <Link className='btn' to='products'>
            Menu
          </Link>
        </div>
      </div>
      <div className='box3'>
        Box-3
        <img src={delivery} alt='' />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: calc(100vh - 88px);
  background-color: var(--primary-10);
  .container {
    display: grid;
  }
  .box1,
  .box2 {
    overflow: hidden;
  }
  .box1 {
    background-color: var(--white);
    height: calc(50vh - 44px);
    position: relative;
    display: grid;
    place-items: center;
    box-shadow: var(--shadow-3);
    img {
      max-width: 100%;
      position: absolute;
      object-fit: cover;
    }
  }
  .box2 {
    background-color: var(--primary-9);
    height: calc(50vh - 44px);
    display: grid;
    place-items: center;
    h1 {
      color: var(--primary-11);
    }
    div {
    }
    a {
      margin-bottom: 2rem;
    }
  }
  .box3 {
    background-color: var(--primary-9);
    height: calc(50vh - 44px);
    overflow: hidden;
    position: relative;
    display: grid;
    place-items: center;
    object-fit: cover;
    img {
      max-width: var(--fixed-width);
      max-height: 400px;
      position: absolute;
    }
  }

  /*============= Media query========== */
  @media (max-width: 600px) {
    .box3 {
      display: none;
    }
  }
  @media (min-width: 600px) {
    .container {
      grid-template-columns: 1fr 1fr;
    }
    .box1,
    .box2 {
      height: calc(50vh - 44px);
    }
    .box1 {
    }
    .box2 {
    }
  }
  /* ======Media Query======== */
  @media (min-width: 768px) {
    .box1,
    .box2 {
    }
    .box1 {
    }
    .box2 {
    }
  }
  @media (min-width: 920px) {
    .box1,
    .box2 {
    }
    .box1 {
    }
    .box2 {
    }
  }
  @media (min-width: 1120px) {
    .box1,
    .box2 {
    }
    .box1 {
    }
    .box2 {
    }
  }
`
export default LandingPageOne
