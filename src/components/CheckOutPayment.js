import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { removeCart } from '../features/cart/cartSlice'
import { getPaymentValue, orderThunk } from '../features/order/orderSlice'
import { getCartFromLocalStorage } from '../utils/localStorage'

const CheckOutPayment = () => {
  const dispatch = useDispatch()
  const { order } = useSelector((state) => {
    return state
  })
  const {
    card,
    country,
    exp,
    digit,
    email,
    firstName,
    house,
    lastName,
    mobile,
    province,
    street,
    town,
  } = order

  // const handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault()
    const orderList = await getCartFromLocalStorage()
    dispatch(
      orderThunk({
        card,
        country,
        exp,
        digit,
        email,
        firstName,
        house,
        lastName,
        mobile,
        province,
        street,
        town,
        orderList,
      })
    )
    dispatch(removeCart())
  }
  // Const handleChange
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(getPaymentValue({ name, value }))
  }

  return (
    <Wrapper className='container'>
      <div className='form-holder'>
        <h2 className='title head-title'>payment</h2>
        <form className='payment-form' onSubmit={handleSubmit}>
          {/* first name Input */}
          <div>
            <label htmlFor='firstName'>First Name</label>
            <input
              placeholder='Name'
              type='text'
              id='firstName'
              name='firstName'
              value={firstName}
              onChange={handleChange}
            />
          </div>
          {/* last Name Input */}
          <div>
            <label htmlFor='lastName'>Last Name</label>
            <input
              placeholder='Family Name'
              type='text'
              id='lastName'
              name='lastName'
              value={lastName}
              onChange={handleChange}
            />
          </div>
          {/* house Input */}
          <div>
            <label htmlFor='house'>Apt / House No</label>
            <input
              placeholder='Apt 3 House No 4 '
              type='text'
              id='house'
              name='house'
              value={house}
              onChange={handleChange}
            />
          </div>
          {/* street Input */}
          <div>
            <label htmlFor='street'>Street Name</label>
            <input
              type='text'
              id='street'
              name='street'
              value={street}
              onChange={handleChange}
            />
          </div>
          {/* Town Input */}
          <div>
            <label htmlFor='town'>Town</label>
            <input
              type='text'
              id='town'
              name='town'
              value={town}
              onChange={handleChange}
            />
          </div>
          {/* province Input */}
          <div>
            <label htmlFor='province'>Province</label>
            <input
              placeholder='Ontario'
              type='text'
              id='province'
              name='province'
              value={province}
              onChange={handleChange}
            />
          </div>
          {/* country Input */}
          <div>
            <label htmlFor='country'>Country</label>
            <input
              placeholder='Canada'
              type='text'
              id='country'
              name='country'
              value={country}
              onChange={handleChange}
            />
          </div>
          {/* card Input */}
          <div>
            <label htmlFor='card'>Card No</label>
            <input
              placeholder='4545 4545 4545 4545'
              type='number'
              id='card'
              name='card'
              value={card}
              onChange={handleChange}
            />
          </div>
          {/* exp Input */}
          <div>
            <label htmlFor='exp'>Expiry Date</label>
            <input
              placeholder='1224'
              type='number'
              id='exp'
              name='exp'
              value={exp}
              onChange={handleChange}
            />
          </div>
          {/* digit Input */}
          <div>
            <label htmlFor='digit'>3 Digits - cvv</label>
            <input
              placeholder='Back of your card'
              type='number'
              id='digit'
              name='digit'
              value={digit}
              onChange={handleChange}
            />
          </div>
          {/* name Input */}
          <div>
            <label htmlFor='mobile'>Mobile or Home No</label>
            <input
              placeholder='4165000000'
              type='number'
              id='mobile'
              name='mobile'
              value={mobile}
              onChange={handleChange}
            />
          </div>
          {/* name Input */}
          <div>
            <label htmlFor='name'>Email</label>
            <input
              placeholder='Jain@email.com'
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={handleChange}
            />
          </div>
          <button type='submit' className='btn '>
            Place your order
          </button>
        </form>
      </div>
      <div></div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  .form-holder {
    form {
      @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
    }

    background: var(--white);
    label,
    input {
      width: 200px;

      display: block;
    }
  }
  label {
    padding: 5px;
  }
  .btn {
    margin-top: 1rem;
  }

  .head-title {
    margin-top: 3rem;
  }
  @media (min-width: 768px) {
    .head-title {
      margin-top: 0rem;
    }
  }
`
export default CheckOutPayment
