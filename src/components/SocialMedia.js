import React from 'react'
import styled from 'styled-components'
import { socialIcons } from '../utils/data'

const SocialMedia = () => {
  return (
    <Wrapper className='socialIcons'>
      <h3>Follow us</h3>
      {socialIcons.map((item) => {
        return (
          <div key={item.id}>
            <ul>
              <li>
                <a href={item.path} target={item.target} rel={item.rel}>
                  {item.icon} {item.title}
                </a>
              </li>
            </ul>
          </div>
        )
      })}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  max-width: var(--mobile-width);
  box-shadow: var(--shadow-1);
  background-color: var(--white);
  padding: 0 1rem;
  a {
    font-size: 1.2rem;
    color: var(--grey-6);
    :hover {
      cursor: pointer;
      color: var(--primary-5);
    }
  }
`
export default SocialMedia
