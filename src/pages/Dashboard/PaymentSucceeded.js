import React from 'react'
import queryString from 'query-string'
import { useEffect } from 'react'
import { postOnlineOrderThunk } from '../../features/cart/cartSlice'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
const PaymentSucceeded = () => {
  const [value, setValue] = useState(false)
  const dispatch = useDispatch()
  const parsed = queryString.parse(window.location.search)
  const { payment_intent, payment_intent_client_secret, redirect_status } =
    parsed

  // I have created this function to cancel double order behavior caused by double render.
  const callFunction = () => {
    dispatch(
      postOnlineOrderThunk({
        payment_intent,
        payment_intent_client_secret,
        redirect_status,
      })
    )
  }
  useEffect(() => {
    setValue(true)
    if (value) {
      callFunction()
    }
    // eslint-disable-next-line
  }, [value])
  return (
    <div>
      <h4>Your order Placed Thank you.</h4>
    </div>
  )
}

export default PaymentSucceeded
