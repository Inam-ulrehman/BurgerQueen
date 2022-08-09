import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

const OrderListComponent = ({ name, price, image, createdAt }) => {
  return (
    <Wrapper className='container'>
      <div className='img-holder'>
        <img src={image} alt='' />
        <h4>{name}</h4>
        <p>{moment(createdAt).format('MMM Do YY')}</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  text-align: center;

  .img-holder {
    max-width: 200px;
    max-height: 200px;
    border: 2px solid var(--primary-5);
    margin: 0 auto;
    margin-bottom: 1rem;
    margin-top: 1rem;
    box-shadow: var(--shadow-2);

    img {
      max-height: 300px;
      width: 100%;
      display: block;
    }
    h4,
    p {
      margin: 0;
    }
  }
`

export default OrderListComponent
