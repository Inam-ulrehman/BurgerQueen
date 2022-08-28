import React from 'react'
import styled from 'styled-components'
import HomeImage from '../../images/transparent.png'
const LandingPageOne = () => {
  return (
    <Wrapper>
      <div className='box-1'>
        <h2>Burger Queen</h2>
      </div>
      <div className='box-2'>
        <img src={HomeImage} alt='' />
      </div>
      <div className='box-3'>
        <h1>Order Food</h1>
      </div>
      <div className='style'></div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: calc(100vh);
  position: relative;
  overflow: hidden;
  display: grid;
  place-items: center;
  background-color: #fcaf15;
  .box-1 {
    margin-top: 1rem;
  }
  .box-2 {
    max-width: Auto;
    overflow: hidden;
    max-width: 1200px;
  }
  .box-3 {
    z-index: 3;
    border-radius: 1rem;
    :hover {
      cursor: pointer;
      background-color: var(--primary-3);
    }
  }
  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }

  .box-1,
  .box-2,
  .box-3 {
    border: 2px solid black;
  }
  .box-1,
  .box-3 {
    color: var(--white);
    background-color: var(--primary-5);
    padding: 1rem;
  }
  .style {
    width: 100%;
    height: 5px;
    background-color: var(--primary-5);
    padding: 2rem;
    position: absolute;
    bottom: 0;
  }
  /* @media query */
  @media (max-width: 768px) {
  }
  @media (min-width: 600px) {
    .box-1 {
      position: absolute;
      left: 5%;
      top: 50%;
      margin-top: 0;
      /* transform: translate(50%, 50%); */
    }
    .box-3 {
      position: absolute;
      right: 5%;
      top: 50%;
    }
  }
`

export default LandingPageOne
