import React from 'react'
import { ShoppingCartCheckoutOutlined } from '@mui/icons-material'
import { Button } from '@mui/material'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const CartIcon = () => {
  const { cartItem } = useSelector((state) => state.cart)
  return (
    <Link to='/cart'>
      <Button variant='outlined'>
        <ShoppingCartCheckoutOutlined />{' '}
        <p style={{ margin: '0' }}>{cartItem}</p>
      </Button>
    </Link>
  )
}

export default CartIcon
