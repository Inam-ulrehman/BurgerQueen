import React from 'react'
import { Link } from 'react-router-dom'
import CartHolder from '../components/Cart/CartHolder'

import CashOrderName from '../components/Cart/CashOrderName'
import { useState } from 'react'

const Cart = () => {
  const [showName, setShowName] = useState(false)

  const handleShowName = (e) => {
    setShowName(true)
  }
  const handleHideName = (e) => {
    setShowName(false)
  }
  return (
    <div>
      {showName && <CashOrderName handleHideName={handleHideName} />}

      <CartHolder />
      <Link to='/dashboard/payment' className='btn'>
        PayOnline
      </Link>
      <div>
        <button className='btn' type='button' onClick={handleShowName}>
          payCash
        </button>
      </div>
    </div>
  )
}

export default Cart
