import React from 'react'
import styled from 'styled-components'

const OrderItems = ({ cart }) => {
  return (
    <>
      {/* Order has one item value */}
      {cart.length === 1
        ? cart.map((item, index) => (
            <Wrapper className='singleCart box-2' key={index}>
              <p>{item.name}</p>
              <img style={{ width: '250px' }} src={item.image} alt='burger' />
            </Wrapper>
          ))
        : null}
      {/* Order has more then one value */}
      {cart.length > 1
        ? cart.map((item, index) => (
            <Wrapper className='multiCart box-3' key={index}>
              <p>{item.name}</p>
              <img style={{ width: '250px' }} src={item.image} alt='burger' />
            </Wrapper>
          ))
        : null}
    </>
  )
}
const Wrapper = styled.div`
  width: 300px;
  background: var(--white);
  p {
    margin: 0;
    text-align: center;
  }
`

export default OrderItems
