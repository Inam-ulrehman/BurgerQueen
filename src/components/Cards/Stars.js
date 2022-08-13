import { React } from 'react'
import styled from 'styled-components'

const Stars = ({ starValue }) => {
  return (
    <Wrapper>
      <span
        className={`fa fa-star ${starValue >= 1 ? 'checked' : ''} `}
        id='1'
      ></span>
      <span
        className={`fa fa-star ${starValue >= 2 ? 'checked' : ''} `}
        id='2'
      ></span>
      <span
        className={`fa fa-star ${starValue >= 3 ? 'checked' : ''} `}
        id='3'
      ></span>
      <span
        className={`fa fa-star ${starValue >= 4 ? 'checked' : ''} `}
        id='4'
      ></span>
      <span
        className={`fa fa-star ${starValue >= 5 ? 'checked' : ''} `}
        id='5'
      ></span>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .fa {
    :hover {
      cursor: pointer;
    }
  }
  .checked {
    color: orange;
  }
`

export default Stars
