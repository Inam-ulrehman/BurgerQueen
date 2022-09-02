import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CartHolder from '../components/Cart/CartHolder'
import CashOrderName from '../components/Cart/CashOrderName'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Button } from '@mui/material'
import CartIcon from '../components/Cart/CartIcon'

const Cart = () => {
  const { cart, user } = useSelector((state) => state)

  // ===========================================
  const [open, setOpen] = React.useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  // ====================================
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])
  return (
    <Wrapper>
      {open && (
        <CashOrderName
          handleClose={handleClose}
          open={open}
          setOpen={setOpen}
        />
      )}

      {/* Buttons onlinePay-CashPay */}
      {cart.cart.length > 0 ? (
        <div className='btn-holder'>
          <Link to='/products'>
            <Button variant='outlined' onClick={handleClickOpen}>
              Menu
            </Button>
          </Link>
          <Link to={user.user.length === 0 ? '/user' : '/dashboard/payment'}>
            <Button variant='outlined' onClick={handleClickOpen}>
              Pay Online
            </Button>
          </Link>
          <Button variant='outlined' onClick={handleClickOpen}>
            Pay Cash
          </Button>
          <CartIcon />
        </div>
      ) : null}
      <CartHolder />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: calc(100vh - 64px);
  .btn-holder {
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding-top: 1rem;
  }
`
export default Cart
