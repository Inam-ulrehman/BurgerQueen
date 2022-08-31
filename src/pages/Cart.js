import React from 'react'
import { Link } from 'react-router-dom'
import CartHolder from '../components/Cart/CartHolder'

import CashOrderName from '../components/Cart/CashOrderName'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Cart = () => {
  const { cart, user } = useSelector((state) => state)
  const [showName, setShowName] = useState(false)

  const handleShowName = (e) => {
    setShowName(true)
  }
  const handleHideName = (e) => {
    setShowName(false)
  }

  return (
    <Wrapper>
      {showName && <CashOrderName handleHideName={handleHideName} />}

      {/* Buttons onlinePay-CashPay */}
      {cart.cart.length > 0 ? (
        <div className='btn-holder'>
          <Link
            to={user.user.length === 0 ? '/user' : '/dashboard/payment'}
            className='btn'
          >
            PayOnline
          </Link>
          <button className='btn' type='button' onClick={handleShowName}>
            payCash
          </button>
        </div>
      ) : null}
      <CartHolder />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 64px;
  min-height: calc(100vh - 64px);
  .btn-holder {
    margin-top: 6%;
    display: flex;
    place-items: center;
    flex-direction: column-reverse;
    gap: 1rem;
  }
`
export default Cart
