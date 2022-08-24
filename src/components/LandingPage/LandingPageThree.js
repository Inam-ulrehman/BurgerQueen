import React from 'react'
import styled from 'styled-components'
import imageHiring from '../../images/Hiring.png'
import burger from '../../images/QueenBurger.png'
import { Link } from 'react-router-dom'
const LandingPageThree = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='box01'>
          <h3 className='title'>In Store pickup</h3>
          <div className='title-underline'></div>
        </div>

        <div className='box1'>
          <img src={burger} alt='' />
          <div className='box2'>
            <Link to='/products' className='btn'>
              Order Now
            </Link>
            <p> Pay Later </p>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  .container {
    justify-content: center;
    height: 100vh;
    width: 400px;
    float: right;
    display: grid;
    align-items: center;
    .box01 {
      margin-top: -4rem;
    }
    .box1 {
      height: 50vh;
      width: 300px;
      margin-top: -10rem;
    }
    .box2 {
      background-color: var(--primary-9);
      width: 300px;
      margin-top: -10px;
      overflow: hidden;
      display: flex;
      justify-content: space-between;

      p {
        margin: 0;
        padding-right: 10px;
        color: var(--white);
      }
      a {
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
      }
    }
  }

  @media (max-width: 768) {
  }
  @media (min-width: 768px) {
    background: url(${imageHiring});
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-attachment: fixed;
  }
`

export default LandingPageThree
