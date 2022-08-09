import { React, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import CartItemsHolder from '../components/CartItemsHolder'
import EmptyCart from '../components/EmptyCart'

const Cart = () => {
  const { cart } = useSelector((state) => {
    return state.cart
  })

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])
  return (
    <Wrapper>
      {cart.length > 0 ? (
        cart.map((item, index) => {
          return <CartItemsHolder key={index} {...item} />
        })
      ) : (
        <EmptyCart />
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  .container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    .single-item {
      background: var(--white);
      height: 200px;
      margin-top: 4.3rem;
      box-shadow: var(--shadow-1);
      transition: var(--transition);
      :hover {
        box-shadow: var(--shadow-3);
      }
    }
    gap: 5px;
    /* ===Cart Item Holder=== */
    .single-item-heading {
      border-bottom: 1px solid var(--grey-3);
    }
    .image-description {
      display: grid;
      grid-template-columns: 1fr 3fr;
    }
    .image-box {
      height: 100px;
      width: 100px;

      overflow: hidden;

      margin-left: 1rem;
      img {
        max-height: 100px;
        max-width: 100px;
        width: 100%;
        object-fit: cover;
      }
    }
    .information-box {
      display: grid;
      grid-template-columns: 4fr 1fr;
      div {
        padding: 10px;
        padding-top: 0;
        h5 {
          margin: 0;
        }
        p {
          font-size: var(--extra-small-text);
          margin: 0;
        }
      }
    }
    .item-total {
      margin: 0px;
      font-size: var(--extra-small-text);
      display: flex;
      justify-content: space-around;
    }
    /* ===TOTAL BILL HOLDER==== */
    .cart-holder {
      position: fixed;
      width: 150px;
      height: 200px;
      background: var(--white);
      box-shadow: var(--shadow-1);
      right: 10px;
      top: 100px;
      transition: var(--transition);
      :hover {
        box-shadow: var(--shadow-3);
      }

      div {
        display: grid;
        grid-template-columns: 1fr 1fr;
        h5 {
          font-size: var(--extra-small-text);
          margin: 0px;
          padding: 8px;
          color: var(--grey-10);
        }
      }
    }
    .cart-holder-total {
      border-bottom: 1px solid var(--grey-2);
      margin-bottom: 5px;
    }
    .cart-holder-delivery {
      font-size: var(--extra-small-text);
      border-bottom: 2px solid var(--grey-3);
      margin: 4px 13px;
    }
    @media (min-width: 768px) {
      .cart-holder {
        width: 250px;
      }
    }
    @media (max-width: 450px) {
      .single-item {
        width: 200px;
      }
    }
    @media (min-width: 768px) {
      .single-item {
        margin-top: 0.6rem;
      }
    }
  }
`
export default Cart
