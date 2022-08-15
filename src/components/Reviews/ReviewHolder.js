import React from 'react'
import moment from 'moment'
import Stars from '../Cards/Stars'

const ReviewHolder = ({ review }) => {
  const { reviews, total, isLoading } = review
  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
        <div className='loading'></div>
      </div>
    )
  }

  return (
    <div>
      <h1>Total Reviews count : {total}</h1>
      {reviews
        .map((item) => {
          const { createdAt, _id, name, reviewInput, starValue } = item
          return (
            <div key={_id}>
              <Stars starValue={starValue} />
              <h4>{name}</h4>
              <p>{reviewInput}</p>
              <p>{moment(createdAt).format('MMM Do YY')}</p>
            </div>
          )
        })
        .reverse()}
    </div>
  )
}

export default ReviewHolder
