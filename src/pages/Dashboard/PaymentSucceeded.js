import React from 'react'
import queryString from 'query-string'
import { useEffect } from 'react'
import { postOnlineOrderThunk } from '../../features/cart/cartSlice'
import { useDispatch } from 'react-redux'
const PaymentSucceeded = () => {
  const dispatch = useDispatch()
  const parsed = queryString.parse(window.location.search)
  const { payment_intent, payment_intent_client_secret, redirect_status } =
    parsed

  useEffect(() => {
    setTimeout(() => {
      dispatch(
        postOnlineOrderThunk({
          payment_intent,
          payment_intent_client_secret,
          redirect_status,
        })
      )
    }, 1000)

    // eslint-disable-next-line
  }, [])
  return (
    <div>
      <h4>Your order Placed Thank you.</h4>
    </div>
  )
}

export default PaymentSucceeded
