import React from 'react'

import styled from 'styled-components'

import FormInputHolder from '../components/LandingPageHolders/FormInputHolder'

const LandingPage = () => {
  return (
    <Wrapper className='api-box'>
      <div className='logo-holder'>
        <h1 className='title'>
          Member <span>Area</span>
        </h1>
      </div>
      <div className='title-underline underline-create'></div>
      {/* Login/Signup */}
      <FormInputHolder />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  @media (max-width: 768px) {
    .logo-holder {
      margin-top: 4rem;
    }
  }
  .style-create {
    margin: 0 auto;
  }
  .underline-create {
    margin-top: 1rem;
  }
  span {
    color: var(--primary-5);
  }
`
export default LandingPage
