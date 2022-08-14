import { useEffect } from 'react'
import { React, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import Stars from '../components/Cards/Stars'
import {
  getReviewsInput,
  getReviewThunk,
  postReviewThunk,
} from '../features/reviews/reviewSlice'

const Reviews = () => {
  const [starValue, setStarValue] = useState(5)
  const { review } = useSelector((state) => state)
  const dispatch = useDispatch()
  const params = useParams()
  const productId = params.singleProduct

  // Submit value
  const handleSubmit = (e) => {
    const { name, reviewInput } = review
    e.preventDefault()
    dispatch(postReviewThunk({ productId, starValue, name, reviewInput }))
  }
  // onChange value
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(getReviewsInput({ name, value }))
  }
  // handle Review
  const handleReview = (e) => {
    console.log(e.target)
    setStarValue(e.target.id)
  }
  useEffect(() => {
    dispatch(getReviewThunk(productId))
    // eslint-disable-next-line
  }, [])
  return (
    <Wrapper>
      <h1 className='title'>Review's</h1>
      <div className='btn-holder'>
        <Link className='btn' to='/'>
          Home
        </Link>
        <Link className='btn' to='/products'>
          Menu
        </Link>
      </div>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          {/* Name input */}
          <label className='form-label' htmlFor='name'>
            Name
          </label>
          <input
            className='form-input'
            type='text'
            placeholder='Enter your name...'
            id='name'
            name='name'
            value={review.name}
            onChange={handleChange}
          ></input>
        </div>

        <div>
          {/* Name input */}
          <label className='form-label' htmlFor='reviewInput'>
            Review
          </label>
          <div onClick={handleReview}>
            <Stars starValue={starValue} />
          </div>
          <textarea
            className='form-input'
            type='text'
            placeholder='Leave your review here...'
            id='reviewInput'
            name='reviewInput'
            rows='6'
            columns='50'
            value={review.reviewInput}
            onChange={handleChange}
          ></textarea>
        </div>
        <button className='btn' type='submit'>
          Submit
        </button>
      </form>
    </Wrapper>
  )
}
const Wrapper = styled.article``

export default Reviews
