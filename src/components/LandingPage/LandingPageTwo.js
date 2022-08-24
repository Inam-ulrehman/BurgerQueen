import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { landingTwo } from '../../utils/data'

const LandingPageTwo = () => {
  return (
    <Wrapper>
      {landingTwo.map((item) => {
        const { id, title, classType, paragraph, path, image, buttonTitle } =
          item
        return (
          <div key={id} className='container'>
            <div className={classType}>
              <img src={image} alt='' />
              <h4>{title}</h4>
              <p>{paragraph}</p>
              <Link className='button' to={path}>
                {buttonTitle}
              </Link>
            </div>
          </div>
        )
      })}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: grid;
  .container {
    display: grid;
    gap: 2rem;
    place-items: center;
    img {
      max-width: 400px;
      max-height: 300px;
    }
  }
  .box1,
  .box2,
  .box3,
  .box4 {
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
    margin-top: 1rem;
    overflow: hidden;
    background-color: var(--white);
    max-width: 400px;
    box-shadow: var(--shadow-2);
    h4 {
      margin: 0;
      padding-left: 1rem;
    }
    p {
      font-size: var(--small-text);
      padding: 5px;
      margin: 0;
      padding-left: 1rem;
    }
    a {
      float: right;
      padding: 5px;
      margin-bottom: 10px;
      margin-right: 1rem;
      border-radius: 40px;
      font-size: var(--small-text);
      border: 2px solid var(--primary-11);
      transition: var(--transition);
      :hover {
        background-color: var(--primary-8);
        color: var(--white);
      }
    }
    h4,
    p,
    a {
      color: var(--primary-11);
    }
  }
  .box2 {
  }

  /* ==========Media query========= */
  @media (min-width: 600px) {
  }
  @media (min-width: 768px) {
    .container {
      .box1 {
      }
    }
  }
  @media (min-width: 920px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1120px) {
  }
`
export default LandingPageTwo
