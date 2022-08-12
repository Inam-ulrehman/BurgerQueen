import React from 'react'

import { Link, useParams } from 'react-router-dom'

const Reviews = () => {
  const params = useParams()
  console.log(params)
  return (
    <div>
      <h1>Review page</h1>
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
