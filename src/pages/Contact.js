import { React, useEffect } from 'react'
import styled from 'styled-components'
import contactImage from '../images/contact.svg'
import Logo from '../components/Logo'
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
      <div className='heading-holder'>
        <h1 className='title animate__backInUp'>
          Contact <span className='span'> / Us</span>
        </h1>
        <img src={contactImage} alt='' />
      </div>
      <form className='form' onSubmit={handleSubmit}>
        <Logo />
        {/* name input */}
        <TextField
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
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .field {
    margin-top: 1rem;
  }
  .heading-holder .title {
    span {
      color: var(--primary-5);
    }
  }
  .heading-holder {
    text-align: center;
    img {
      max-width: 300px;
    }
  }
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;

    .heading-holder {
      display: grid;
      align-content: center;
    }
  }
  .btnMui {
    margin-top: 1rem;
  }
`
export default Contact
