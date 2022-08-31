import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  getUserNameCashPayment,
  payInCash,
  postCashOrderThunk,
} from '../../features/cart/cartSlice'

const CashOrderName = ({ handleHideName }) => {
  const { cart } = useSelector((state) => state)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  // const handle Submit
  const handleSubmit = (e) => {
    const { name } = cart
    e.preventDefault()
    navigate('/payCash')
    dispatch(postCashOrderThunk({ name, payCash: cart.cart }))
    dispatch(payInCash())
  }
  // const handle change
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(getUserNameCashPayment({ name, value }))
  }
  return (
    <div>
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <label className='form-label' htmlFor='name'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={cart.name}
            onChange={handleChange}
          />
          <button className='btn' type='submit'>
            submit
          </button>
        </form>

        <button className='btn' type='button' onClick={handleHideName}>
          back to cart
        </button>
      </div>
    </div>
  )
}

export default CashOrderName
