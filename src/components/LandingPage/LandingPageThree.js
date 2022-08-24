import React from 'react'
import styled from 'styled-components'
import imageHiring from '../../images/Hiring.png'
const LandingPageThree = () => {
  return <Wrapper></Wrapper>
}

const Wrapper = styled.div`
  height: 100vh;
  border: 2px solid black;
  background: url(${imageHiring});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-attachment: fixed;
`
export default LandingPageThree
