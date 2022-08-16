import React from 'react'
import { Link } from 'react-router-dom'
import CartHolder from '../components/Cart/CartHolder'
import { useDispatch } from 'react-redux'
import { payInCash } from '../features/cart/cartSlice'
import CashOrderName from '../components/Cart/CashOrderName'
import { useState } from 'react'

const Cart = () => {
  const [showName, setShowName] = useState(false)
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(payInCash())
  }

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
      <Link to='/user' className='btn'>
        PayOnline
      </Link>
      <div>
        <button className='btn' type='button' onClick={handleShowName}>
          payCash
        </button>
        <Link to='/payCash' className='btn' onClick={handleClick}>
          Link to payCash
        </Link>
      </div>
    </div>
  )
}

export default Cart
