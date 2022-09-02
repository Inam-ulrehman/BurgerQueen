import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import image from '../../images/cart.svg'
const EmptyCart = () => {
  return (
    <Wrapper>
      <h1 className='title'>
        Empty <span>/ Cart</span>
      </h1>

      <img src={image} alt='' />
      <div className='btn-holder'>
        <Link className='btn' to='/products'>
          Back to Menu
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: calc(100vh - 64px);
  margin: 0 auto;
  text-align: center;
  .title {
    margin: 0;
    span {
      color: var(--primary-5);
    }
  }
  img {
    margin-top: 1rem;
    max-width: 400px;
    max-height: 400px;
  }

  .btn-holder {
    text-align: center;
    a {
    }
  }
`

export default EmptyCart
