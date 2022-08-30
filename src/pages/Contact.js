import { React, useEffect } from 'react'
import styled from 'styled-components'
import contactImage from '../images/contact.svg'
import { useDispatch, useSelector } from 'react-redux'
import {
  contactThunk,
  getContactDetails,
} from '../features/contact/contactSlice'
import { toast } from 'react-toastify'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const Contact = () => {
  const dispatch = useDispatch()
  const { contact } = useSelector((state) => state)
  //  handle Submit
  const handleSubmit = (e) => {
    const { name, lastName, email, message, mobile, details } = contact
    e.preventDefault()
    if (!name || !lastName || !email || !message || !details || !mobile) {
      toast.warning('Please fill in all details...')
      return
    } else {
      dispatch(
        contactThunk({ name, lastName, email, message, mobile, details })
      )
      return
    }
  }

  // handle onChange
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(getContactDetails({ name, value }))
  }
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])
  return (
    <Wrapper>
      <h1 className='title '>
        Contact <span className='span'> / Us</span>
      </h1>
      <div className='container'>
        <div className=' box-1'>
          <img src={contactImage} alt='' />
        </div>
        <form className='form box-2' onSubmit={handleSubmit}>
          {/* name input */}
          <TextField
            sx={{ width: '100%' }}
            className='field'
            label='Name'
            variant='outlined'
            type='text'
            id='name'
            name='name'
            size='small'
            value={contact.name}
            onChange={handleChange}
          />

          {/* last name input */}
          <TextField
            sx={{ width: '100%' }}
            className='field'
            label='Last Name'
            variant='outlined'
            type='text'
            id='lastName'
            name='lastName'
            size='small'
            value={contact.lastName}
            onChange={handleChange}
          />

          {/* email input */}
          <TextField
            sx={{ width: '100%' }}
            className='field'
            label='Email'
            variant='outlined'
            type='text'
            id='email'
            name='email'
            size='small'
            value={contact.email}
            onChange={handleChange}
          />

          {/* mobile input */}
          <TextField
            sx={{ width: '100%' }}
            className='field'
            label='Mobile Number'
            variant='outlined'
            type='Number'
            id='mobile'
            name='mobile'
            size='small'
            value={contact.mobile}
            onChange={handleChange}
          />

          {/* message input */}
          <TextField
            sx={{ width: '350px' }}
            className='field'
            label='Message Title'
            variant='outlined'
            type='text'
            id='message'
            name='message'
            size='small'
            value={contact.message}
            onChange={handleChange}
          />

          {/* additional details input */}
          <TextField
            sx={{ width: '100%' }}
            className='field'
            label='Additional Details'
            variant='outlined'
            type='text'
            id='details'
            name='details'
            multiline
            rows={6}
            value={contact.details}
            onChange={handleChange}
          />

          <Button size='medium' variant='contained' type='submit'>
            Submit
          </Button>
        </form>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  margin-top: 64px;
  .MuiFormControl-root {
    display: block;
  }
  .MuiButton-root {
    margin-top: 5px;
  }
  .title {
    margin-bottom: 0;
    span {
      color: var(--primary-5);
    }
  }

  .container {
    display: grid;
    justify-content: center;
    padding: 0px 1rem;
  }
  .box-1,
  .box-2 {
  }
  .box-1 {
    display: none;

    img {
      width: 100%;
    }
  }
  .box-2 {
    margin-top: auto;
  }
  .MuiFormControl-root {
    margin-top: 10px;
  }
  @media (min-width: 768px) {
    .container {
      grid-template-columns: 1fr 1fr;
    }
    .box-1 {
      display: grid;
      place-items: center;
    }
  }
`
export default Contact
