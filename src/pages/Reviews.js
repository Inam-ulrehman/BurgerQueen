import React from 'react'
import { Link } from 'react-router-dom'

const Reviews = () => {
  return (
    <div>
      <h1>Review</h1>
      <Link className='btn' to='/'>
        Home
      </Link>
      <Link className='btn' to='/products'>
        Menu
      </Link>
    </div>
  )
}

export default Reviews
