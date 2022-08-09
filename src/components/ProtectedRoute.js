import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((state) => {
    return state.user
  })

  if (user.length >= 0) {
    return <Navigate to='/' />
  }
  return children
}

export default ProtectedRoute
