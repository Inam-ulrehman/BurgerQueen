import styled from 'styled-components'

const DesktopNavbarWrapper = styled.nav`
  @media (max-width: 768px) {
    display: none;
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    background-color: var(--white);
    box-shadow: var(--shadow-2);
    padding: 0rem 1rem;
    text-align: center;
  }
  .navbar {
    ul {
      display: flex;
      a {
        padding: 1rem;
        text-align: center;
      }
    }
  }
`
export default DesktopNavbarWrapper
