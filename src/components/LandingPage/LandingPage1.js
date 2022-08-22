import React from 'react'
import { category } from '../../utils/sampleData'
import image from '../../../src/images/Home.png'
import styled from 'styled-components'

const LandingPage1 = () => {
  return (
    <Wrapper>
      <div className='image-holder'>
        <div className='box1'>Box-1</div>
        <div className='box2'>Box-2</div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .image-holder {
    background: url(${image});
    background-size: cover;
    background-position: center;
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    height: calc(100vh - 88px);
  }
`
export default LandingPage1
