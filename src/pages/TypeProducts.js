import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { products } from '../utils/sampleData'
const TypeProducts = () => {
  const params = useParams()
  const singleProduct = `123`

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
      <Link to={`/products/${params.type}/${singleProduct}`}>
        Go to single product
      </Link>
      {filterObject.map((item) => {
        return (
          <article key={item.id}>
            <div>
              <div className='img-holder'>
                <img src={item.image} alt='' className='img' />
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default TypeProducts
