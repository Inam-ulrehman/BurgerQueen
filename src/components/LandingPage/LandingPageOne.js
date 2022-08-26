import React from 'react'
import styled from 'styled-components'
import mob from '../../images/mobile.png'
import comp from '../../images/computer.png'
import { Link } from 'react-router-dom'
const LandingPageOne = () => {
  return (
    <Wrapper className='container'>
      <div className='Logo'>
        <h1>Queen's</h1>
        <div className='underline'></div>
      </div>
      <Link className='hero' to={'/products'}>
        Order Now
      </Link>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  position: relative;
  height: calc(100vh);
  background: url(${mob});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  .Logo {
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translate(-50%, -50%);
    border-bottom: 5px solid var(--primary-5);
    h1 {
      margin: 0;
      color: var(--white);
      font-size: 3.5rem;
    }
  }
  .hero {
    position: absolute;
    font-size: x-large;
    font-weight: 700;
    left: 50%;
    top: 80%;
    transform: translate(-50%, -50%);
    background-color: #b95f00;
    color: #e9cca4;
    padding: 1rem;
    border-radius: 20px;
    transition: var(--transition);
    box-shadow: var(--shadow-4);
    :hover {
      color: #b95f00;
      background-color: #e9cca4;
    }
  }
  @media (min-width: 600px) {
    .Logo {
      left: 20%;
    }
  }
  @media (min-width: 768px) {
    background: url(${comp});
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 40px;
    height: calc(100vh - 40px);
    .hero {
      left: 80%;
      top: 20%;
    }
  }
`
export default LandingPageOne
