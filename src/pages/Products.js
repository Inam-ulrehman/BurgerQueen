import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Filter, ProductsHolder, Sort } from '../components'

const Products = () => {
  const { isLoading, allProducts, limitProducts } = useSelector(
    (state) => state.products
  )

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])
  if (isLoading) {
    return (
      <div>
        <h3>loading....</h3>
        <div className='loading'></div>
      </div>
    )
  }
  return (
    <Wrapper>
      <div className='f-p-box'>
        <div className='filter-box'>
          <div className='filter'>
            <Filter />
          </div>
        </div>
        <div className='p-sort'>
          <Sort />
        </div>
        <div className='total'>
          <p>Total Products: {allProducts.length}</p>
          <p>TotTa Filter Products:{limitProducts.length}</p>
        </div>
        <div className='title-underline'></div>
        <div className='products'>
          <div className='p-holder'>
            {limitProducts.map((item) => {
              return <ProductsHolder key={item.id} {...item} />
            })}
          </div>
        </div>
      </div>
      <button
        style={{ position: 'fixed', bottom: '0', right: '0' }}
        className='btn'
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        }}
      >
        Scroll up
      </button>
    </Wrapper>
  )
}
const Wrapper = styled.main`
  overflow: hidden;
  @media (min-width: 768px) {
    margin-top: -2rem;
  }

  .p-sort {
    margin-top: -2rem;

    width: var(--fixed-width);
    @media (min-width: 768px) {
      text-align: center;
    }
  }

  .p-holder {
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (min-width: 680px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 780px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  .button-holder {
    margin-top: 1rem;
    text-align: center;
    button {
      margin-right: 1rem;
    }
  }
  .title-total {
    color: var(--primary-8);
  }
  .total {
    display: flex;
    gap: 1rem;
    max-width: 400px;
    margin: 0 auto;
    p {
      color: var(--primary-8);
    }
  }
`
export default Products
