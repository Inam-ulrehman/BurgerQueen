import React from 'react'
import { useDispatch } from 'react-redux'
import {
  decreaseItemAmount,
  increaseItemAmount,
  removeCartItem,
} from '../../features/cart/cartSlice'
import { formatPrice } from '../../utils/helper'

const SingleCartItem = ({ name, _id, total, image, price }) => {
  const dispatch = useDispatch()
  // =======increaseValue=======
  const handleIncrease = (id) => {
    dispatch(increaseItemAmount({ id }))
  }
  // ======Decrease Value=======
  const handleDecrease = (id) => {
    dispatch(decreaseItemAmount({ id }))
  }

  const handleRemove = (e) => {
    dispatch(removeCartItem(e))
  }
  return (
    <div>
      <p>{name}</p>
      <button type='button' className='btn' onClick={() => handleIncrease(_id)}>
        increase
      </button>
      <span className='btn'>{total}</span>
      <button type='button' className='btn' onClick={() => handleDecrease(_id)}>
        decrease
      </button>
      <p>price: {formatPrice(price)} </p>
      <div className='img-container'></div>
      <img className='img' src={image} alt='' />
      <button type='button' onClick={() => handleRemove(_id)} className='btn'>
        {name} Remove
      </button>
    </div>
  )
}

export default SingleCartItem
