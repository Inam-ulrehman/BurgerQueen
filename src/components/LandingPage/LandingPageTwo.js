import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { gender } from '../../utils/data'
import 'animate.css'

const LandingPageTwo = () => {
  const priceImg =
    'https://res.cloudinary.com/inam6530/image/upload/v1659548031/GUEST_e332b6bf-10f6-40c6-8286-8997af1bf4e6_tjwg23.jpg'
  return (
    <Wrapper>
      <div className='style'></div>
      <h1>
        Eyewear for
        <span
          style={{ display: 'inline-block', color: 'var(--primary-5)' }}
          className='animate__animated animate__flipInX animate__slower animate__infinite'
        >
          Everyone
        </span>
      </h1>
      <p className='title-header'>
        Get a complete pair of prescription glasses starting at $9.95.
      </p>
      <div className='container-img'>
        {gender.map((item) => {
          return (
            <article className='cart-holder' key={item.id}>
              <div className='img-holder'>
                <img src={item.link} alt='' />
              </div>
              <Link to='/products' className='btn btn-block'>
                {item.title}
              </Link>
            </article>
          )
        })}
      </div>
      <div className='style'></div>
      <div className='container-box'>
        <div className='price-container'>
          <h3>Styles for Every Budget</h3>
          <div className='title-underline'></div>
          <Link className='btn btn-style' to='/products'>
            under 15 $
          </Link>
          <Link className='btn btn-style' to='/products'>
            under 30 $
          </Link>
        </div>
        <div className='img-holder'>
          <img src={priceImg} alt='' />
        </div>
      </div>
      <div className='style'></div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .title-header {
    margin: 0 auto;
  }
  text-align: center;
  .img-holder {
    max-width: 300px;
    max-height: 300px;
    margin: auto;
    margin-top: 1rem;

    img {
      max-height: 300px;
      overflow: hidden;
      width: 100%;
      object-fit: cover;
      box-shadow: var(--shadow-2);
    }
  }
  .btn {
    max-width: 300px;
  }
  .btn-style {
    margin-top: 1rem;
    margin-right: 1rem;
  }

  @media (min-width: 768px) {
    .container-img,
    .container-box {
      display: flex;
      gap: 1rem;
      justify-content: center;
    }
    .container-box {
      text-align: center;
      padding: 3rem;

      .btn {
        margin-top: 5rem;
        margin-left: 2rem;
      }
    }
  }
  .style {
    height: 2px;
    width: 100%;
    border: 2px solid var(--primary-5);
    margin: 1rem;
  }
`
export default LandingPageTwo
