import React from 'react'
import { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { calculateTotal, emptyCart } from '../features/cart/cartSlice'

import SingleCartItem from './SingleCartItem'

const CartHolder = () => {
  const dispatch = useDispatch()
  const { cart, total } = useSelector((state) => {
    return state.cart
  })
  useEffect(() => {
    dispatch(calculateTotal())
    // eslint-disable-next-line
  }, [cart])
  if (cart.length === 0) return <div>Your cart is empty</div>
  return (
    <div>
      <h4>Cart holder</h4>

      {cart.map((item, index) => {
        return <SingleCartItem key={index} {...item} />
      })}
      <button
        type='button'
        className='btn'
        onClick={() => dispatch(emptyCart())}
      >
        empty cart
      </button>
      <hr />
      <div>
        <p> total</p>
        <p>{total}</p>
      </div>
    </div>
  )
}

export default CartHolder
