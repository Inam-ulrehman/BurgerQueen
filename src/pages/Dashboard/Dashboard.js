import React from 'react'
import Cart from '../Cart'
import PaymentSucceeded from './PaymentSucceeded'
import queryString from 'query-string'

const Dashboard = () => {
  const parsed = queryString.parse(window.location.search)
  const { redirect_status } = parsed

  return (
    <div>
      {redirect_status === 'succeeded' && <PaymentSucceeded />}

      <Cart />
    </div>
  )
}

export default Dashboard
