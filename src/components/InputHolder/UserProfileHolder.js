import { Button, TextField } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
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
      <form onSubmit={handleSubmit} className='profile-container '>
        {/* name input */}

        <TextField
          className='profile-box-1'
          size='small'
          type='text'
          id='outlined-multiline-static'
          label='Name'
          multiline
          name='name'
          value={name}
          onChange={handleChange}
        />

        {/* Last name input */}
        <TextField
          className='profile-box-1'
          size='small'
          type='text'
          id='outlined-multiline-static'
          label='LastName'
          multiline
          name='lastName'
          value={lastName}
          onChange={handleChange}
        />

        {/* date of birth input */}
        <TextField
          className='profile-box-1'
          size='small'
          type='text'
          id='outlined-multiline-static'
          label='Date of Birth'
          multiline
          name='dateOfBirth'
          value={dateOfBirth}
          onChange={handleChange}
        />

        {/* mobile input */}
        <TextField
          className='profile-box-1'
          size='small'
          type='number'
          id='outlined-multiline-static'
          label='Mobile Number'
          multiline
          name='mobile'
          value={mobile}
          onChange={handleChange}
        />

        {/*house input */}
        <TextField
          className='profile-box-1'
          size='small'
          type='text'
          id='outlined-multiline-static'
          label='House No'
          multiline
          name='house'
          value={house}
          onChange={handleChange}
        />

        {/*street input */}
        <TextField
          className='profile-box-1'
          size='small'
          type='text'
          id='outlined-multiline-static'
          label='Street'
          multiline
          name='street'
          value={street}
          onChange={handleChange}
        />

        {/*town input */}
        <TextField
          className='profile-box-1'
          size='small'
          type='text'
          id='outlined-multiline-static'
          label='Town'
          multiline
          name='town'
          value={town}
          onChange={handleChange}
        />

        {/*province input */}
        <TextField
          className='profile-box-1'
          size='small'
          type='text'
          id='outlined-multiline-static'
          label='Province'
          multiline
          name='province'
          value={province}
          onChange={handleChange}
        />

        {/*country input */}
        <TextField
          className='profile-box-1'
          size='small'
          type='text'
          id='outlined-multiline-static'
          label='Country'
          name='country'
          value={country}
          onChange={handleChange}
        />

        <Button
          onClick={() => toast.success('Profile updated')}
          variant='contained'
          type='submit'
        >
          Submit
        </Button>
      </form>
    </div>
  )
}

export default UserProfileHolder
