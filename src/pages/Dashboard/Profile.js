import React from 'react'
import styled from 'styled-components'
import UserProfileHolder from '../../components/InputHolder/UserProfileHolder'
import profileImage from '../../images/profile.svg'

const Profile = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='box-1'>
          <img src={profileImage} alt='profile ' />
        </div>

        <UserProfileHolder />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .box-1 {
    text-align: center;
  }
  img {
    width: 300px;
  }
  .container {
    display: grid;
    justify-content: center;
  }
  .box-1 {
    background-color: var(--primary-10);
    margin-bottom: 1rem;
  }
  .profile-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    .MuiInputBase-root {
      min-width: 180px;
    }
  }

  @media (min-width: 600px) {
    .profile-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`

export default Profile
