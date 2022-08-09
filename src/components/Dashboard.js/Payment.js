import { React, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import CheckOutPayment from '../CheckOutPayment'

import TotalCartComponent from '../TotalCartComponent'
import member from '../../images/member.svg'
import { Link } from 'react-router-dom'

const Payment = () => {
  const { cart } = useSelector((state) => state.cart)
  const { user } = useSelector((state) => state.user)

  const newTotal = cart.reduce((total, cart) => {
    total += cart.price
    return total
  }, 0)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])
  return (
    <Wrapper>
      {cart.length > 0 ? (
        <div>
          <CheckOutPayment />
          <TotalCartComponent newTotal={newTotal} />
        </div>
      ) : (
        <div className='member-container'>
          {/* Member area here */}
          <h1 className='title'>
            Hello,<span>{user.name}</span>
          </h1>
          <div className='title-underline'></div>
          <img src={member} alt='' />
          <Link className='btn btn-block' to='/products'>
            See our store for more Collections...
          </Link>
        </div>
      )}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  margin-top: 4rem;
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
  .member-container {
    span {
      color: var(--primary-5);
    }
    text-align: center;
    img {
      max-width: 300px;
      max-height: 300px;
      margin-top: 2rem;
    }
  }
`
export default Payment
