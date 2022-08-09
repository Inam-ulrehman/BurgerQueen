import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LandingPageThreeHolder = ({ id, image }) => {
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
  display: grid;
  place-items: center;
  img {
    max-height: 75px;
    object-fit: cover;
  }
  @media (min-width: 600px) {
    img {
      max-height: 150px;
    }
  }
`

export default LandingPageThreeHolder
