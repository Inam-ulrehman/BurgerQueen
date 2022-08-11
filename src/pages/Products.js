import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { category } from '../utils/sampleData'
const Products = () => {
  const type = 'drinks'
  const handleClick = (e) => {
    console.log(e.target)
  }
  return (
    <Wrapper>
      <h1>Product</h1>
      <Link to={`/products/${type}`}>Find my type</Link>
      {category.map((item, index) => {
        return (
          <article className='container' key={index} {...item}>
            <div onClick={handleClick} className='item-container'>
              <Link to={`/products/${item.category}`}>
                {' '}
                <h3>{item.category}</h3>
                <div className='img-holder'>
                  <img className='img' src={item.url} alt='Burger ' />
                </div>
              </Link>
            </div>
          </article>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .item-container {
    max-width: var(--mobile-width);
  }
`

export default Products
