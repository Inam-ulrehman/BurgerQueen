import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import desktop from '../../images/home.jpg'
import 'animate.css'

export const LandingPageOne = () => {
  return (
    <Wrapper>
      <div className='img-holder'>
        <img src={desktop} alt='sunglasses ' />
      </div>
      <div className='text-holder'>
        <h2 className='animate__animated animate__fadeInLeft animate__slower'>
          Prescription <span>Sunglasses</span>
        </h2>
        <div className='title-underline'></div>
        <h5 className='key'>
          Our affordable sunnies protect your eyes and your wallet all year
          long.
        </h5>
        <Link
          className='btn btn-hipster animate__animated animate__infinite animate__slower animate__pulse '
          to='/products'
        >
          SHOP ALL
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .img-holder {
    max-height: 350px;
    width: 350px;
    margin: 0 auto;
    overflow: hidden;
    img {
      max-height: 300px;
      width: 100%;
      object-fit: cover;
    }
  }
  span {
    color: var(--primary-5);
  }
  /* ==textHolder=== */
  .text-holder {
    text-align: center;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .animate__animated {
    z-index: -1;
    color: black;
  }
`
