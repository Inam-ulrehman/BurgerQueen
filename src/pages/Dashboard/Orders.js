import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getallOnlineOrderThunk } from '../../features/cart/cartSlice'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

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
            <div className='item box-1'>
              {item.name} Id: {item._id} <p>create date {item.createdAt}</p>
              <p>{item.total}</p>
            </div>
            {/* Order has one item value */}
            {cart.length === 1
              ? cart.map((item, index) => (
                  <div className='singleCart box-2' key={index}>
                    <p>{item.name}</p>
                    <img style={{ width: '300px' }} src={item.image} alt='' />
                  </div>
                ))
              : null}
            {/* Order has more then one value */}
            {cart.length > 1
              ? cart.map((item, index) => (
                  <div className='multiCart box-3' key={index}>
                    {item.name}
                    <img style={{ width: '300px' }} src={item.image} alt='' />
                  </div>
                ))
              : null}
          </div>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border: 5px solid pink;
  .container {
    border: 5px solid gray;
    margin: 5px;
  }
`

export default Orders
