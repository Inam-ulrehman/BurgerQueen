import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { category } from '../utils/sampleData'
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
const Products = () => {
  return (
    <Wrapper>
      <h1 className='title'>
        BurgerQueen <span>/ Menu</span>
      </h1>
      <div className='main-container'>
        {category.map((item, index) => {
          return (
            <article className='container' key={index} {...item}>
              <div className='item-container box-1'>
                <Link to={`/products/${item.category}`}>
                  {' '}
                  <h2 className='title'>
                    {capitalizeFirstLetter(item.category)}
                  </h2>
                  <div className='img-holder'>
                    <img className='img' src={item.url} alt='Burger ' />
                  </div>
                </Link>
              </div>
            </article>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 64px;
  .main-container {
    display: grid;
    place-items: center;
  }
  .title {
    span {
      color: var(--primary-5);
    }
  }
  .img {
    width: 100%;
  }
  .container {
    margin: 1rem;
    max-width: 400px;
  }

  .box-1 {
    position: relative;
    border-radius: var(--radius);
    background-color: var(--white);
    box-shadow: var(--shadow-1);
    transition: var(--transition);
    :hover {
      box-shadow: var(--shadow-4);
    }
    h2 {
      color: var(--primary-5);
      margin: 0;
    }
  }

  /* media query */
  @media (min-width: 600px) {
    .main-container {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 900px) {
    .main-container {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  @media (min-width: 1120px) {
  }
`

export default Products
