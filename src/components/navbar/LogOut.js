import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logeOutUser } from '../../features/user/userSlice'

const LogOut = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)
  return (
    <>
      {user.length !== 0 ? (
        <button className='btn' onClick={() => dispatch(logeOutUser())}>
          LogOut
        </button>
      ) : null}
    </>
  )
}

export default LogOut
