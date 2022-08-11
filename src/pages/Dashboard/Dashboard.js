import React from 'react'

import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to='/dashboard/profile' className='btn'>
        Profile
      </Link>
      <Link to='/dashboard/orders' className='btn'>
        Orders
      </Link>
    </div>
  )
}

export default Dashboard
