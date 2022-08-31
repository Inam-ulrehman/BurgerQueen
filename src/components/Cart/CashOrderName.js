import React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  getUserNameCashPayment,
  payInCash,
  postCashOrderThunk,
} from '../../features/cart/cartSlice'
import styled from 'styled-components'
import { toast } from 'react-toastify'

const CashOrderName = ({ handleClose, open, setOpen }) => {
  const { cart } = useSelector((state) => state)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  //  handle close

  // const handle Submit
  const handleSubmit = (e) => {
    const { name } = cart
    e.preventDefault()
    if (!name) {
      return toast.error('Please enter a name...')
    }
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
const Wrapper = styled.div``

export default CashOrderName
