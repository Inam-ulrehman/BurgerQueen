import styled from 'styled-components'

const MobileNavbarWrapper = styled.nav`
  @media (min-width: 768px) {
    display: none;
  }
  .container {
    z-index: 10;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: var(--white);
    box-shadow: var(--shadow-2);
    padding: 0.7rem 1rem;
  }
  .container-header {
    display: flex;
    justify-content: space-between;

    .menu-icon {
      font-size: 2rem;
      :hover {
        cursor: pointer;
        color: var(--primary-5);
      }
    }
  }
  .links {
    transition: var(--transition);
    height: 0px;
    transition: var(--transition);
    background-color: var(--white);
    overflow: hidden;
    a {
      display: block;
    }
  }
`
export default MobileNavbarWrapper
