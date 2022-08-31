import React from 'react'
import { Link } from 'react-router-dom'
import CartHolder from '../components/Cart/CartHolder'
import CashOrderName from '../components/Cart/CashOrderName'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Button } from '@mui/material'

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
        </div>
      ) : null}
      <CartHolder />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 64px;
  min-height: calc(100vh - 64px);
  .btn-holder {
    margin-top: 6%;
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding-top: 1rem;
  }
`
export default Cart
