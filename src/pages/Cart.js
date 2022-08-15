import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import CartHolder from '../components/CartHolder'
import CustomerWait from '../components/CustomerWait'

const Cart = () => {
  const [payStore, setPayStore] = useState(false)
  return (
    <div>
      <CartHolder />
      {payStore ? <CustomerWait /> : <h1>Cart page</h1>}
      {!payStore && (
        <div>
          <Link to='/user' className='btn'>
            PayOnline
          </Link>
          <button
            onClick={() => setPayStore(!payStore)}
            type='button'
            className='btn'
          >
            pay cash in store
          </button>
        </div>
      )}
    </div>
  )
}

export default Cart
