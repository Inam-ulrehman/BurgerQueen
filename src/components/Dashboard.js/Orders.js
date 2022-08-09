import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import {
  DeleteOrderThunk,
  getOrderThunk,
} from '../../features/order/orderSlice'
import EmptyCart from '../EmptyCart'
import OrderListComponent from './Dashboard Components/OrderListComponent'

const Orders = () => {
  const dispatch = useDispatch()
  const { order } = useSelector((state) => {
    return state
  })
  const { deleteReload, isLoading, orderListServer } = order
  console.log(orderListServer.count)
  const handleClick = (id) => {
    dispatch(DeleteOrderThunk(id))
  }

  useEffect(() => {
    dispatch(getOrderThunk())
    // eslint-disable-next-line
  }, [deleteReload])

  if (isLoading || orderListServer.length === 0) {
    return (
      <div>
        <h1>Loading...</h1>
        <div className='loading'></div>
      </div>
    )
  }
  if (orderListServer.count === 0) {
    return (
      <div style={{ marginTop: '4rem' }}>
        <EmptyCart />
      </div>
    )
  }
  return (
    <Wrapper>
      <div className='margin'>
        <h1 className='title'>orders</h1>
      </div>
      {orderListServer.orders.map((item) => {
        const { _id, orderList } = item

        return (
          <div key={item._id}>
            <div className='btn-holder'>
              {' '}
              <button
                onClick={() => handleClick(_id)}
                type='button'
                className='btn'
              >
                Remove Order
              </button>
            </div>
            {orderList.map((item, index) => {
              return <OrderListComponent key={index} {...item} />
            })}
          </div>
        )
      })}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .margin {
    padding: 2rem;
  }
  .btn-holder {
    text-align: center;
  }
`
export default Orders
