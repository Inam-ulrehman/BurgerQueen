import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import cookingImg from '../images/cooking.svg'
import { formatPrice } from '../utils/helper'
const PayCash = () => {
  const { isLoading, name, cashOrderId, payCash, total } = useSelector(
    (state) => state.cart
  )
  if (isLoading)
    return (
      <div>
        <h1>Loading...</h1>
        <div className='loading'></div>
      </div>
    )
  return (
    <Wrapper>
      <div className='container'>
        <div className='box-1-2'>
          <div className='box-1'>
            <img src={cookingImg} alt='' />
          </div>
          <div className='box-2'>
            <p>
              Dear <span>{name.toUpperCase()}</span>, we are preparing your
              order.
            </p>
            <p>
              Order Number: <span>{cashOrderId}</span>{' '}
            </p>
            <p>
              Total bill: <span>{formatPrice(total)}</span>
            </p>
          </div>
        </div>
        <div className='box-3'>
          {payCash?.map((item, index) => {
            return (
              <div key={index}>
                <p>{item.name}</p>
                <img src={item.image} alt='' className='img' />
              </div>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: calc(100vh - 64px);
  margin-top: 64px;
  img {
    width: 300px;
  }
  .box-1-2 {
    display: grid;
    place-items: center;

    p {
      margin: 0;
    }
    span {
      color: var(--primary-5);
    }
  }

  .box-2 {
    margin-bottom: 1rem;
  }

  .box-3 {
    display: flex;
    flex-wrap: wrap;
    p {
      margin: 0px;
      background-color: var(--white);
      padding-left: 10px;
      color: var(--primary-5);
    }
  }
`

export default PayCash
