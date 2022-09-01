import { Button } from '@mui/material'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logeOutUser } from '../../features/user/userSlice'

const LogOut = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)
  return (
    <>
      {user.length !== 0 ? (
        <Button className='btn' onClick={() => dispatch(logeOutUser())}>
          LogOut
        </Button>
      ) : null}
    </>
  )
}

export default LogOut
