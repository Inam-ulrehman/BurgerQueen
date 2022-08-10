import React from 'react'
import styled from 'styled-components'

const Subscribe = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <Wrapper>
      <h4>News letter</h4>
      <p>Receive updates on the latest news and Offers.</p>
      <form className='subscribe-form' onClick={handleSubmit}>
        <input placeholder='Enter your email address.' type='text' />
        <button className='btn' type='submit'>
          Join
        </button>
      </form>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  max-width: var(--mobile-width);
  background-color: var(--white);
  border-radius: var(--radius);
  box-shadow: var(--shadow-1);
  p,
  h4 {
    padding: 0 1rem;
    margin: 0;
  }
  .subscribe-form {
    padding: 5px;
    input {
      padding: 5px;
      margin-right: 10px;
    }
  }
`
export default Subscribe
