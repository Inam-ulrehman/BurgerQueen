import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import boxImage from '../../images/2.png'

const LandingPageTwo = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='box1'>
          <img src={boxImage} alt='' />
          <h4>box-1</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
            repellendus quibusdam, deleniti nisi molestiae quas neque sint non
            fugit quaerat dicta et tenetur eos. Nulla delectus rem alias eum
            error.
          </p>
          <Link className='button' to='/user'>
            SignUp to Order
          </Link>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  background-color: var(--primary-10);
  height: 200vh;

  .container {
    display: grid;
    gap: 2rem;
    place-items: center;
    img {
      max-width: 400px;
      max-height: 300px;
    }
  }
  .box1 {
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
    margin-top: 1rem;
    overflow: hidden;
    background-color: var(--white);
    max-width: 400px;
    h4 {
      margin: 0;
      padding-left: 1rem;
    }
    p {
      font-size: var(--small-text);
      padding: 5px;
      margin: 0;
      padding-left: 1rem;
    }
    a {
      float: right;
      padding: 5px;
      margin-bottom: 10px;
      margin-right: 1rem;
      border-radius: 40px;
      font-size: var(--small-text);
      border: 2px solid var(--primary-11);
      transition: var(--transition);
      :hover {
        background-color: var(--primary-8);
        color: var(--white);
      }
    }
    h4,
    p,
    a {
      color: var(--primary-11);
    }
  }

  /* ==========Media query========= */
  @media (min-width: 600px) {
  }
  @media (min-width: 768px) {
    height: 100vh;
    .container {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      .box1 {
      }
    }
  }
  @media (min-width: 920px) {
  }
  @media (min-width: 1120px) {
  }
`

export default LandingPageTwo
