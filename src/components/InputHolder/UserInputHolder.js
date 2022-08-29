import { Button, TextField, Typography } from '@mui/material'
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

const UserInputHolder = () => {
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
      return navigate('/dashboard')
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
        <Typography variant='h5'>{isMember ? 'Login' : 'Register'}</Typography>
        {/* name input */}
        {!isMember && (
          <div>
            <TextField
              size='small'
              id='name'
              label='Name'
              variant='outlined'
              type='text'
              name='name'
              value={name}
              onChange={handleChange}
            />
          </div>
        )}

        {/* email input */}
        <div>
          <TextField
            sx={{ Width: '310px' }}
            size='small'
            id='outlined-basic'
            label='Email'
            variant='outlined'
            type='text'
            name='email'
            value={email}
            onChange={handleChange}
          />
        </div>
        {/* password input */}
        <div>
          <TextField
            size='small'
            id='outlined-basic password'
            label='Password'
            variant='outlined'
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
          />
        </div>
        <Button type='submit' variant='outlined'>
          Submit
        </Button>
        <Typography>
          {isMember ? 'Are you register ?' : 'Are you a member ?'}{' '}
          <Button
            size='small'
            variant='text'
            onClick={handleToggle}
            type='button'
          >
            {isMember ? 'Register' : 'Login'}
          </Button>
        </Typography>
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
    display: grid;
    gap: 1rem;
  }
  @media (min-width: 600px) {
  }
`

export default UserInputHolder
