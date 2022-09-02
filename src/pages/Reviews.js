import { Button, TextField } from '@mui/material'
import { useEffect } from 'react'
import { React, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import Stars from '../components/Cards/Stars'
import ReviewHolder from '../components/Reviews/ReviewHolder'
import {
  getReviewsInput,
  getReviewThunk,
  postReviewThunk,
} from '../features/reviews/reviewSlice'

const Reviews = () => {
  const [value, setValue] = useState(false)
  const [starValue, setStarValue] = useState(5)
  const { review } = useSelector((state) => state)

  const dispatch = useDispatch()
  const params = useParams()
  const productId = params.singleProduct

  // Submit value
  const handleSubmit = (e) => {
    const { name, reviewInput } = review
    e.preventDefault()
    if (!name || !reviewInput) {
      return toast.error('Please Provide Both Name and Review.')
    }
    dispatch(postReviewThunk({ productId, starValue, name, reviewInput }))
    dispatch(getReviewThunk(productId))
    setValue(!value)
  }
  // onChange value
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(getReviewsInput({ name, value }))
  }
  // handle Review
  const handleReview = (e) => {
    setStarValue(e.target.id)
  }
  useEffect(() => {
    dispatch(getReviewThunk(productId))
    // eslint-disable-next-line
  }, [value])
  return (
    <Wrapper>
      <h1 className='title'>
        Customer <span>/ Review's</span>
      </h1>
      <Link
        style={{ width: 'fit-content' }}
        to={`/products/${params.type}/${params.singleProduct}`}
      >
        <Button variant='outlined'>Go Back</Button>
      </Link>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth={true}
          type='text'
          variant='outlined'
          label='Name'
          name='name'
          value={review.name}
          onChange={handleChange}
        />
        <div className='stars' onClick={handleReview}>
          Pick stars
          <Stars starValue={starValue} />
        </div>
        <TextField
          fullWidth={true}
          type='text'
          variant='outlined'
          label='Review'
          name='reviewInput'
          multiline
          rows={6}
          value={review.reviewInput}
          onChange={handleChange}
        />

        <Button variant='outlined' className='btn' type='submit'>
          Submit
        </Button>
      </form>
      <ReviewHolder review={review} />
    </Wrapper>
  )
}
const Wrapper = styled.article`
  min-height: 100vh;
  display: grid;
  justify-content: center;
  padding: 0 1rem;
  align-items: baseline;
  gap: 1rem;
  form {
    max-width: var(--fixed-width);
  }
  .title {
    span {
      color: var(--primary-5);
    }
  }
  .stars {
    margin: 1rem auto;
    display: flex;
    gap: 1rem;
    width: fit-content;
  }
  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`

export default Reviews
