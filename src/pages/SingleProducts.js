import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import CartHolder from '../components/Cart/CartHolder'
import { getCartItems } from '../features/cart/cartSlice'
import styled from 'styled-components'
import { formatPrice } from '../utils/helper'
import { toast } from 'react-toastify'

const SingleProducts = () => {
  const { products } = useSelector((state) => state.product)
  const dispatch = useDispatch()
  const params = useParams()
  const filterObject = products.filter((item) => {
    const filterResult = item._id === params.singleProduct
    return filterResult
  })
  const handleAddToCart = (e) => {
    toast.success('Successfully add in your cart...')
    dispatch(getCartItems(filterObject))
  }
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])
  return (
    <Wrapper>
      <div className='main-container'>
        {filterObject.map((item, index) => {
          return (
            <article key={index}>
              <h1 className='title'>{item.name}</h1>
              <div className='container'>
                <div className='box-1-2'>
                  <div className='body-img box-1'>
                    <img src={item.image} alt='' className='img' />
                  </div>
                  <div className='body-text box-2'>
                    <p>
                      calories: <span>{item.calories}</span>
                    </p>
                    <p>
                      Fat: <span>{item.Fat}</span>
                    </p>
                    <p>
                      Fibre: <span>{item.Fibre}</span>
                    </p>
                    <p>
                      Sugar: <span>{item.Sugar}</span>
                    </p>
                    <p>
                      Protein: <span>{item.calories}</span>
                    </p>
                    <p>
                      Sodium: <span>{item.calories}</span>
                    </p>
                    <p>
                      Carbohydrates: <span>{item.Carbohydrates}</span>
                    </p>
                    <p>
                      price: <span>{formatPrice(item.price)}</span>
                    </p>
                  </div>
                  <button
                    onClick={handleAddToCart}
                    className='btn btn-block'
                    type='button'
                  >
                    Add to Cart
                  </button>
                </div>
                <div className='body-description box-3'>
                  <h3>Description</h3>
                  {item.description}
                  <div className='link-container'>
                    <Link
                      to={`/products/${params.type}/${params.singleProduct}/review`}
                      className='btn-hipster'
                    >
                      Review's
                    </Link>
                    <Link to='/cart' className='btn-hipster'>
                      Your Cart
                    </Link>
                    <Link to='/products' className='btn-hipster'>
                      menu
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>
      {/* ==================Cart Holder============ */}
      <CartHolder />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  margin-top: 64px;

  .link-container {
    a {
      margin-right: 5px;
    }
  }
  .img {
    width: 100%;
  }
  .main-container {
    min-height: calc(100vh - 64px);
  }

  /* Single Item Css */

  .container {
    .box-1,
    .box-2,
    .box-3 {
    }
    .box-1 {
      max-width: 300px;
      background-color: var(--white);
    }

    .box-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      width: 300px;
      background-color: var(--white);
      p {
        margin: 0px 10px;
      }
    }
  }
  .box-1-2 {
    display: grid;
    place-items: center;

    .btn {
      max-width: 300px;
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
      padding: 1rem;
    }

    width: 100%;
  }

  .box-3 {
    max-width: 400px;
    padding: 1rem;
  }

  /* media query */
  @media (min-width: 600px) {
    .container {
      display: flex;
      justify-content: center;
      .box-1 {
        max-width: 400px;
      }
      .box-2 {
        width: 100%;
      }
      .box-1-2 {
        margin-right: 2rem;
        max-width: 400px;
        .btn {
          max-width: 100%;
        }
      }
    }
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 900px) {
  }
  @media (min-width: 1120px) {
  }
`
export default SingleProducts
