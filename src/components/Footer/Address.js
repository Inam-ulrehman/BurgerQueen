import React from 'react'
import styled from 'styled-components'
import { address } from '../../utils/data'

const Address = () => {
  return (
    <Wrapper className='contact'>
      <h4>Contact US</h4>
      {address.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.title}:</p>
            <p className='info'>{item.titleInfo}</p>
          </div>
        )
      })}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  box-shadow: var(--shadow-1);
  border-radius: var(--radius);
  max-width: var(--mobile-width);
  background-color: var(--primary-10);
  padding: 0 10px;
  p {
    margin: 0;
    display: inline;
  }
  .info {
    color: var(--grey-5);
    margin-left: 5px;
    :hover {
    }
  }
`
export default Address
