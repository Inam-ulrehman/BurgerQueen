import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { increaseItemAmount, removeCartItem } from '../features/cart/cartSlice'

const CartHolder = () => {
  const dispatch = useDispatch()

  const { cart } = useSelector((state) => {
    return state.cart
  })
  // =======increaseValue=======
  const handleIncrease = (id) => {
    dispatch(increaseItemAmount(id))
  }
  // ======Decrease Value=======
  const handleDecrease = (e) => {
    console.log(e.target)
  }

  const handleRemove = (e) => {
    dispatch(removeCartItem(e))
  }
  if (cart.length === 0) return <div>Your cart is empty</div>
  return (
    <div>
      <h4>Cart holder</h4>

      {cart.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.name}</p>
            <button
              type='button'
              className='btn'
              onClick={() => handleIncrease(item._id)}
            >
              increase
            </button>
            <span className='btn'>{item.total}</span>
            <button type='button' className='btn' onClick={handleDecrease}>
              decrease
            </button>
            <div className='img-container'></div>
            <img className='img' src={item.image} alt='' />
            <button
              type='button'
              onClick={() => handleRemove(item._id)}
              className='btn'
            >
              {item.name} Remove
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default CartHolder
