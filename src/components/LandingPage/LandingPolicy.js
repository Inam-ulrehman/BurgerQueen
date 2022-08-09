import React from 'react'
import styled from 'styled-components'

const LandingPolicy = () => {
  return (
    <Wrapper>
      <div className='box box1'>
        <h4>40 Million +</h4>
        <p>Glasses sold</p>
      </div>
      <div className='box box2'>
        <p>TRUSTPILOT</p>
        <h4>120K + Reviews</h4>
      </div>
      <div className='box box3'>
        <h4>Award-Winning</h4>
        <p>CUSTOMER SERVICE</p>
      </div>
      <div className='box box4'>
        <h4>30-Day Returns</h4>
        <p>100 % SATISFACTION GUARANTEED</p>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  justify-content: center;

  @media (max-width: 768px) {
  }
  gap: 5px;
  .box {
    border-bottom: 2px solid var(--primary-5);
    h4,
    p {
      margin: 5px;
      padding: 0;
      width: 300px;
    }
  }
`
export default LandingPolicy
