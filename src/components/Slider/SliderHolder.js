import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SliderHolder = ({ id, image }) => {
  return (
    <Wrapper className='item'>
      <Link to={`/products/${id}`} type='submit'>
        <img src={image} alt='' />
      </Link>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  margin-right: 10px;
  img {
    max-height: 75px;
    object-fit: cover;

    transform: translateX(-10px);
  }
  @media (min-width: 600px) {
    img {
      max-height: 150px;
    }
  }
`

export default SliderHolder
