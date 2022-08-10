import { React, useEffect } from 'react'
import styled from 'styled-components'
import Subscribe from '../components/Subscribe'

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])
  return (
    <Wrapper>
      <h1>Component</h1>

      <div>
        <div className='style'></div>
        <Subscribe />
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.article`
  .image-holder {
    position: relative;
    max-height: 100vh;
    max-width: 100vw;
    overflow: hidden;
    img {
      margin: 0 auto;
      max-height: 100vh;
      width: 100%;
      object-fit: cover;
    }
  }
  @media (max-width: 768px) {
    .image-holder {
      margin-top: 4rem;
    }
  }
`
export default About
