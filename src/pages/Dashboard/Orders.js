import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getallOnlineOrderThunk } from '../../features/cart/cartSlice'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import OrderDetails from '../../components/Orders/OrderDetails'
import OrderItems from '../../components/Orders/OrderItems'

const Orders = () => {
  const { customerOrdersData, isLoading } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getallOnlineOrderThunk())
    // eslint-disable-next-line
  }, [])
  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
        <div className='loading'></div>
      </div>
    )
  }
  if (customerOrdersData.length === 0) {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>We have no record of your previous orders.</h1>
        <p style={{ margin: '0 auto' }}>
          If there is any order or details missing please contact us.
        </p>
        <Link to='/contact'>
          <Button variant='outlined'>Contact Page</Button>
        </Link>
      </div>
    )
  }
  return (
    <Wrapper className='main-container'>
      {customerOrdersData.map((item) => {
        const cart = item.cart

        return (
          <div className='container' key={item._id}>
            <OrderDetails item={item} />
            <OrderItems cart={cart} />
          </div>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 1rem;
  .container {
    box-shadow: var(--shadow-1);
    margin: 10px;
    display: inline-flex;
    flex-wrap: wrap;

    justify-content: center;
  }

  .box-3,
  .box-2 {
    border: 5px solid var(--primary-9);
  }
`

export default Orders
