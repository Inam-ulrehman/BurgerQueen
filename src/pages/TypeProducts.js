import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { products } from '../utils/sampleData'
const TypeProducts = () => {
  const params = useParams()
  // Filter Object Here
  const filterObject = products.filter((item) => {
    const filterResult = item.category === params.type
    return filterResult
  })
  return (
    <div>
      <h1>TypeProducts</h1>
      <Link to='/products' className='btn'>
        Menu
      </Link>
      {filterObject.map((item) => {
        return (
          <article key={item.id}>
            <Link to={`/products/${params.type}/${item.id}`} className='btn'>
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
