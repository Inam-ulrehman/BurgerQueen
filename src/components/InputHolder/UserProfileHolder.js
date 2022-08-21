import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  getLoginUserThunk,
  getUserProfile,
  postLoginUserThunk,
} from '../../features/user/userProfileSlice'

const UserProfileHolder = () => {
  const dispatch = useDispatch()
  const {
    name,
    lastName,
    dateOfBirth,
    mobile,
    house,
    street,
    town,
    province,
    country,
    isLoading,
    // isEditing,
  } = useSelector((state) => state.userProfile)
  // handleSubmit=====
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
    dispatch(
      postLoginUserThunk({
        name,
        lastName,
        dateOfBirth,
        mobile,
        house,
        street,
        town,
        province,
        country,
      })
    )
  }
  // handleChange====
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(getUserProfile({ name, value }))
  }

  useEffect(() => {
    dispatch(getLoginUserThunk())
    // eslint-disable-next-line
  }, [])
  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
        <div className='loading'></div>
      </div>
    )
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>
        {/* name input */}
        <div>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input
            className='form-input'
            type='text'
            name='name'
            id='name'
            value={name}
            onChange={handleChange}
          />
        </div>
        {/* Last name input */}
        <div>
          <label htmlFor='lastName' className='form-label'>
            Last Name
          </label>
          <input
            className='form-input'
            type='text'
            name='lastName'
            id='lastName'
            value={lastName}
            onChange={handleChange}
          />
        </div>
        {/* date of birth input */}
        <div>
          <label htmlFor='dateOfBirth' className='form-label'>
            Date of birth
          </label>
          <input
            className='form-input'
            type='text'
            name='dateOfBirth'
            id='dateOfBirth'
            value={dateOfBirth}
            onChange={handleChange}
          />
        </div>
        {/* mobile input */}
        <div>
          <label htmlFor='mobile' className='form-label'>
            mobile
          </label>
          <input
            className='form-input'
            type='text'
            name='mobile'
            id='mobile'
            value={mobile}
            onChange={handleChange}
          />
        </div>
        {/*house input */}
        <div>
          <label htmlFor='house' className='form-label'>
            house No
          </label>
          <input
            className='form-input'
            type='text'
            name='house'
            id='house'
            value={house}
            onChange={handleChange}
          />
        </div>
        {/*street input */}
        <div>
          <label htmlFor='street' className='form-label'>
            street
          </label>
          <input
            className='form-input'
            type='text'
            name='street'
            id='street'
            value={street}
            onChange={handleChange}
          />
        </div>
        {/*town input */}
        <div>
          <label htmlFor='town' className='form-label'>
            town
          </label>
          <input
            className='form-input'
            type='text'
            name='town'
            id='town'
            value={town}
            onChange={handleChange}
          />
        </div>
        {/*province input */}
        <div>
          <label htmlFor='province' className='form-label'>
            province
          </label>
          <input
            className='form-input'
            type='text'
            name='province'
            id='province'
            value={province}
            onChange={handleChange}
          />
        </div>
        {/*country input */}
        <div>
          <label htmlFor='country' className='form-label'>
            country
          </label>
          <input
            className='form-input'
            type='text'
            name='country'
            id='country'
            value={country}
            onChange={handleChange}
          />
        </div>
        <button type='submit' className='btn btn-block'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default UserProfileHolder
