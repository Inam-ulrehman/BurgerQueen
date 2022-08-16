import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const EmptyCart = () => {
  const image =
    'https://res.cloudinary.com/inam6530/image/upload/v1659613084/emptycart_qc4khy.svg'
  return (
    <Wrapper>
      <h1 className='title'>Empty Cart.</h1>
      <div className='title-underline'></div>
      <img src={image} alt='' />
      <div className='btn-holder'>
        <Link className='btn' to='/products'>
          Back to products
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  img {
    margin-top: 1rem;
    max-width: 400px;
    max-height: 400px;
  }

  .btn-holder {
    text-align: center;
    a {
      margin-top: 5rem;
    }
  }
`

export default EmptyCart
