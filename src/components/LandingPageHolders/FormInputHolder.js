import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import {
  getUserFormInput,
  toggleMember,
  userLoginThunk,
  userRegisterThunk,
} from '../../features/user/userSlice'

const FormInputHolder = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { name, email, password, isLoading, isMember, user } = useSelector(
    (state) => state.user
  )
  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault()

    if (isMember) {
      return dispatch(userLoginThunk({ name, email, password, isMember }))
    } else {
      return dispatch(userRegisterThunk({ name, email, password, isMember }))
    }
  }
  // handleChange
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(getUserFormInput({ name, value }))
  }

  // handleToggle
  const handleToggle = () => {
    dispatch(toggleMember())
  }

  useEffect(() => {
    if (user.length === undefined) {
      setTimeout(() => {
        return navigate('/dashboard')
      }, 100)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.length])
  if (isLoading) {
    return (
      <div>
        <h1 className='title'>Loading....</h1>
        <div className='loading'></div>
      </div>
    )
  }
  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <h5>{isMember ? 'Login' : 'Register'}</h5>
        {/* name input */}
        {!isMember && (
          <div>
            <label htmlFor='name' className='form-label'>
              Name
            </label>
            <input
              placeholder='First Name'
              type='text'
              className='form-input'
              name='name'
              id='name'
              value={name}
              onChange={handleChange}
            />
          </div>
        )}

        {/* email input */}
        <div>
          <label htmlFor='email' className='form-label'>
            email
          </label>
          <input
            placeholder='Email Address'
            type='text'
            className='form-input'
            name='email'
            id='email'
            value={email}
            onChange={handleChange}
          />
        </div>
        {/* password input */}
        <div>
          <label htmlFor='password' className='form-label'>
            password
          </label>
          <input
            placeholder='Password'
            type='password'
            className='form-input'
            name='password'
            id='password'
            value={password}
            onChange={handleChange}
          />
        </div>
        <button type='submit' className='btn btn-block'>
          Submit
        </button>
        <p>
          {isMember ? 'Are you register ?' : 'Are you a member ?'}{' '}
          <button onClick={handleToggle} className='btn' type='button'>
            {isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  p {
    margin: 0 auto;
    margin-bottom: 1rem;
  }
  h1 {
    margin-bottom: 0;
  }
  .form {
    max-width: 400px;
  }
`
export default FormInputHolder
