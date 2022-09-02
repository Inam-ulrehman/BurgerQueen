import React from 'react'
import moment from 'moment'
import Stars from '../Cards/Stars'
import styled from 'styled-components'

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
    <Wrapper>
      <h1 className='title'>
        Total Reviews count : <span>{total}</span>
      </h1>

      <div className='container'>
        {reviews
          ?.map((item) => {
            const { createdAt, _id, name, reviewInput, starValue } = item
            return (
              <div className='box-1' key={_id}>
                <div className='rating'>
                  <h3>{name}</h3>
                  <Stars starValue={starValue} />
                </div>
                <div className='body-input'>
                  <p>Review: {reviewInput}</p>
                </div>
                <p>Created At: {moment(createdAt).format('MMM Do YY')}</p>
              </div>
            )
          })
          .reverse()}
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.article`
  display: grid;
  place-items: center;
  .container {
    display: flex;
    flex-wrap: wrap;
  }

  .box-1 {
    margin: 5px;
    padding: 1rem;
    width: 300px;
    background-color: var(--white);
    box-shadow: var(--shadow-1);
    p {
      margin-bottom: 0px;
    }
    .rating {
      display: flex;
      align-items: center;
      h3 {
        margin: inherit;
        margin-right: 1rem;
      }
    }
    .body-input {
      p {
        overflow-wrap: anywhere;
        margin: 0;
        margin-top: 1rem;
      }
    }
  }
  @media (min-width: 600px) {
  }
  @media (min-width: 920px) {
  }
`
export default ReviewHolder
