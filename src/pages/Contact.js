import { React, useEffect } from 'react'
import styled from 'styled-components'
import contactImage from '../images/contact.svg'
import GoogleApi from '../components/GoogleApi'
import Logo from '../components/Logo'
import { useDispatch, useSelector } from 'react-redux'
import {
  contactThunk,
  getContactDetails,
} from '../features/contact/contactSlice'
import { toast } from 'react-toastify'

const Contact = () => {
  const dispatch = useDispatch()
  const { contact } = useSelector((state) => state)
  //  handle Submit
  const handleSubmit = (e) => {
    const { name, lastName, email, message, details } = contact
    e.preventDefault()
    if (!name || !lastName || !email || !message || !details) {
      toast.warning('Please fill in all details...')
      return
    } else {
      dispatch(contactThunk({ name, lastName, email, message, details }))
      toast.success(`A team member will in touch soon ${name}.`)
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
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
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
        <div>
          <label className='form-label' htmlFor='name'>
            First Name
          </label>
          <input
            className='form-input'
            type='text'
            id='name'
            name='name'
            value={contact.name}
            onChange={handleChange}
          />
        </div>

        {/* last name input */}
        <div>
          <label className='form-label' htmlFor='lastName'>
            Last Name
          </label>
          <input
            className='form-input'
            type='text'
            id='lastName'
            name='lastName'
            value={contact.lastName}
            onChange={handleChange}
          />
        </div>

        {/* email input */}
        <div>
          <label className='form-label' htmlFor='email'>
            Email
          </label>
          <input
            className='form-input'
            type='text'
            id='email'
            name='email'
            value={contact.email}
            onChange={handleChange}
          />
        </div>

        {/* message input */}
        <div>
          <label className='form-label' htmlFor='message'>
            Message
          </label>
          <input
            className='form-input'
            type='text'
            id='message'
            name='message'
            value={contact.message}
            onChange={handleChange}
          />
        </div>

        {/* additional details input */}
        <div>
          <label className='form-label' htmlFor='details'>
            Additional Details
          </label>
          <textarea
            rows='7'
            cols='50'
            className='form-input'
            type='text'
            id='details'
            name='details'
            value={contact.details}
            onChange={handleChange}
          />
        </div>
        <button className='btn btn-block' type='submit'>
          Submit your request
        </button>
      </form>
      <div className='style'></div>
      <GoogleApi />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .title {
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
`
export default Contact
