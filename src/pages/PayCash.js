import React from 'react'
import { useSelector } from 'react-redux'

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
    <div>
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
    </div>
  )
}

export default PayCash
