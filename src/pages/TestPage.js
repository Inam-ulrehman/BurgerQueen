import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  getUserNameCashPayment,
  payInCash,
  postCashOrderThunk,
} from '../features/cart/cartSlice'

export default function FormDialog() {
  const [open, setOpen] = React.useState(false)
  const { cart } = useSelector((state) => state)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  // const handle Submit
  const handleSubmit = (e) => {
    const { name } = cart
    e.preventDefault()
    navigate('/payCash')
    dispatch(postCashOrderThunk({ name, payCash: cart.cart }))
    dispatch(payInCash())
  }

  // const handle change
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(getUserNameCashPayment({ name, value }))
  }

  return (
    <Wrapper>
      <Button variant='outlined' onClick={handleClickOpen}>
        Pay Cash
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Place Order</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To Place your order, please enter your Name here.
          </DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            name='name'
            label='Full Name'
            type='text'
            fullWidth
            variant='standard'
            value={cart.name}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Place Order</Button>
        </DialogActions>
      </Dialog>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  margin-top: 70px;
`
