import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import LandingPageThreeHolder from './LandingPageThreeHolder'

const LandingPageThree = () => {
  const { allProducts } = useSelector((state) => state.products)
  return (
    <Wrapper>
      <h1 className='title'>
        Fresh <span>Collection</span>
      </h1>
      <div className='container'>
        <div className='slider'>
          {allProducts.length > 0 &&
            allProducts
              .map((item) => {
                return (
                  <LandingPageThreeHolder
                    key={item._id}
                    {...item}
                  ></LandingPageThreeHolder>
                )
              })
              .slice(0, 10)}
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .container {
    max-width: 90vw;
    margin: 0 auto;
    overflow-x: scroll;
    margin: 10px;
  }
  .slider {
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    max-width: 80%;
    margin: 0 auto;
    gap: 1rem;
    margin: 1rem;
  }

  .item {
    flex: 0 0 auto;
    width: 100px;
    height: 100px;
    margin: 10px;
    background: var(--white);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    margin: 0 auto;
    object-fit: cover;
    transition: var(--transition);
    :hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      cursor: pointer;
    }
  }
  @media (min-width: 600px) {
    .item {
      width: 200px;
      height: 200px;
    }
  }
  span {
    color: var(--primary-5);
  }
`
export default LandingPageThree
