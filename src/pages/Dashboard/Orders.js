import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getallOnlineOrderThunk } from '../../features/cart/cartSlice'

const Orders = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getallOnlineOrderThunk())
    // eslint-disable-next-line
  }, [])
  return (
    <div>
      <h1>Order</h1>
    </div>
  )
}

export default Orders
