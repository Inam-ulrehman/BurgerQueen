import React, { useEffect } from 'react'
import styled from 'styled-components'
import UserInputHolder from '../components/InputHolder/UserInputHolder'
import login from '../images/login.svg'

const User = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])
  return (
    <Wrapper className='api-box'>
      <h1 className='title'>
        Member <span>/ Area</span>
      </h1>
      <div className='container'>
        <div className='box-2'>
          <img src={login} alt='' />
        </div>
        <div className='box-1'>
          <UserInputHolder />
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  min-height: 100vh;
  overflow: hidden;
  .box-1 {
  }
  .box-2 {
    display: none;
    img {
      width: 100%;
    }
  }
  .title {
    margin-top: 64px;
  }
  @media (min-width: 768px) {
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;

      gap: 1rem;
      .box-1,
      .box-2 {
      }
    }
    .box-2 {
      display: grid;
    }
  }

  span {
    color: var(--primary-5);
  }
`

export default User
