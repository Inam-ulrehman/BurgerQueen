import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const TypeProducts = () => {
  const { isLoading, products } = useSelector((state) => state.product)
  const params = useParams()
  // Filter Object Here
  const filterObject = products.filter((item) => {
    const filterResult = item.category === params.type
    return filterResult
  })
  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
        <div className='loading'></div>
      </div>
    )
  }
  return (
    <div>
      <h1>TypeProducts</h1>
      <Link to='/products' className='btn'>
        Menu
      </Link>
      {filterObject.map((item) => {
        return (
          <article key={item._id}>
            <Link to={`/products/${params.type}/${item._id}`} className='btn'>
              <div>
                <p>{item.name}</p>
                <div className='img-holder'>
                  <img src={item.image} alt='' className='img' />
                </div>
              </div>
            </Link>
          </article>
        )
      })}
    </div>
  )
}

export default TypeProducts
