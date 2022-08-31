import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import {
  decreaseItemAmount,
  increaseItemAmount,
  removeCartItem,
} from '../../features/cart/cartSlice'
import { formatPrice } from '../../utils/helper'

const SingleCartItem = ({ name, _id, total, image, price }) => {
  const dispatch = useDispatch()
  // =======increaseValue=======
  const handleIncrease = (id) => {
    dispatch(increaseItemAmount({ id }))
  }
  // ======Decrease Value=======
  const handleDecrease = (id) => {
    dispatch(decreaseItemAmount({ id }))
  }

  const handleRemove = (e) => {
    dispatch(removeCartItem(e))
  }
  return (
    <Wrapper>
      <div className='img-container box-1'>
        <img className='img' src={image} alt='' />
      </div>
      <div className='body box-2'>
        <p>{name}</p>
        <p>price: {formatPrice(price)} </p>
        <div className='button-holder'>
          <Button
            type='button'
            className='btn'
            onClick={() => handleIncrease(_id)}
          >
            +
          </Button>
          <span className='btn-hipster'>{total}</span>
          <Button
            type='button'
            className='btn'
            onClick={() => handleDecrease(_id)}
          >
            -
          </Button>
        </div>
        <button
          type='button'
          onClick={() => handleRemove(_id)}
          className='btn btn-block'
        >
          Remove
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .img {
    width: 100%;
  }
  display: flex;
  justify-content: center;

  .box-1,
  .box-2 {
    margin: 5px;
    width: 300px;
    height: 200px;
  }
  .box-1 {
    display: flex;
    align-items: center;
    background-color: var(--white);
  }

  .box-2 {
    position: relative;
    padding: 1rem;
    box-shadow: var(--shadow-3);
    .button-holder {
      display: flex;
      justify-content: space-evenly;
      margin-top: 1rem;
    }
    .btn-block {
      position: absolute;
      bottom: 0px;
      left: 0px;
    }
    p {
      margin: 2px;
    }
  }
  @media (min-width: 600px) {
    /* justify-content: space-around; */
  }
`
export default SingleCartItem
