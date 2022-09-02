import React from 'react'
import styled from 'styled-components'
import { formatDate, formatPrice } from '../../utils/helper'
// Box-1
const OrderDetails = ({ item }) => {
  return (
    <Wrapper className='item box-1'>
      <p>
        Order By: <span>{item.name.toUpperCase()}</span>
      </p>
      <p>
        Order Id: <span>{item._id}</span>
      </p>
      <p>
        Order Date: <span>{formatDate(item.createdAt)}</span>
      </p>
      <p>
        Total Bill: <span>{formatPrice(item.total)}</span>
      </p>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  width: 300px;
  padding: 1rem;

  p {
    margin: 0;
    span {
      color: var(--grey-5);
    }
  }
`
export default OrderDetails
