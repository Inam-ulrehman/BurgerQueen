import React from 'react'
import styled from 'styled-components'
const guyImage =
  'https://firebasestorage.googleapis.com/v0/b/burger-queen-6b0d2.appspot.com/o/BurgerGUY_800x800.png?alt=media&token=26702a76-3d6e-42ac-a5a6-fe3ffd042f8b'
const LandingPageThree = () => {
  return (
    <Wrapper className='container'>
      <div className='img box-1'>
        <img src={guyImage} alt='burgerGuy' />
        <div className='bodyText'>
          <h3>Because we Care</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            quod?
          </p>
        </div>
      </div>
      <div className='box-2'>
        <h1>We Offer</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
          architecto neque veritatis autem accusantium. Dignissimos, eius
          accusantium sit a vitae tempora consequatur animi reiciendis et
          aliquam deleniti ullam libero. Quas!
        </p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  overflow: hidden;
  display: grid;

  img {
    z-index: -1;
    max-height: 400px;
  }
  .box-1,
  .bodyText,
  .box-2 {
  }

  .box-1 {
    overflow: hidden;
    max-width: 400px;
  }

  .bodyText {
    max-width: 400px;
    h3,
    p {
      margin: 0;
      text-align: center;
    }
  }
  .box-2 {
    display: none;
  }
  /* ==========Media Query */
  @media (min-width: 600px) {
    grid-template-columns: auto 1fr;
    .box-2 {
      display: block;
      margin-top: 5rem;
    }
  }
  @media (min-width: 768px) {
    height: calc(100vh - 64px);
  }
  @media (min-width: 900px) {
  }
  @media (min-width: 1120px) {
  }
`

export default LandingPageThree
