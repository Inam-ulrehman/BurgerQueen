import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { toast } from 'react-toastify'

const Subscribe = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    axios.post('https://burgerqueenbyinam.herokuapp.com/api/v1/emails', {
      email,
    })
    setEmail('')
    toast.success('Thank you for subscription .')
  }
  const handleChange = (e) => {
    const value = e.target.value
    setEmail(value)
  }
  return (
    <Wrapper>
      <h4>News letter</h4>
      <p>Receive updates on the latest news and Offers.</p>
      <form className='subscribe-form' onSubmit={handleSubmit}>
        <input
          placeholder='Enter your email address.'
          type='text'
          name='name'
          id='name'
          value={email}
          onChange={handleChange}
        />
        <button className='btn' type='submit'>
          Join
        </button>
      </form>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  max-width: var(--mobile-width);
  background-color: var(--primary-10);
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
      background-color: var(--grey-1);
    }
  }
`
export default Subscribe
