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

      <CartHolder />

      {cart.cart.length === 1 ? (
        <div>
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
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 64px;
`
export default Cart
