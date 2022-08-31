import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const PayCash = () => {
  const { isLoading, name, cashOrderId, payCash, total } = useSelector(
    (state) => state.cart
  )
  if (isLoading)
    return (
      <div>
        <h1>Loading...</h1>
        <div className='loading'></div>
      </div>
    )
  return (
    <Wrapper>
      <p>
        Dear {name}, Your order is preparing . Your order number is{' '}
        {cashOrderId}{' '}
      </p>
      <p>your total bill is {total}</p>
      {payCash?.map((item, index) => {
        return (
          <div key={index}>
            <div className='img-container'>
              <img src={item.image} alt='' className='img' />
            </div>
          </div>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  margin-top: 64px;
`

export default PayCash
