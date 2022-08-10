import { React, useState, useRef, useEffect } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { navbarData } from '../../utils/data'
import MobileNavbarComponent from './MobileNavbarComponent'
import Logo from '../Logo'
import LogOut from './LogOut'
import styled from 'styled-components'

const MobileNavbar = () => {
  const [values, setValues] = useState(false)

  // handleToggle
  const handleMenu = () => {
    setValues(!values)
  }
  // handleRef
  const listRef = useRef(null)
  const listContainerRef = useRef(null)

  useEffect(() => {
    const listHeight = listRef.current.getBoundingClientRect().height
    if (values) {
      listContainerRef.current.style.height = `${listHeight + 30}px`
    } else listContainerRef.current.style.height = `0px`
  }, [values])
  return (
    <MobileNavbarWrapper>
      <div className='container'>
        <div className='container-header'>
          <Logo />
          <LogOut />
          {values ? (
            <AiOutlineClose onClick={handleMenu} className='menu-icon' />
          ) : (
            <AiOutlineMenu onClick={handleMenu} className='menu-icon' />
          )}
        </div>
        <div ref={listContainerRef} className='links'>
          <ul ref={listRef} className='link '>
            {/* 'links hide display' */}

            {navbarData.map((item) => {
              return (
                <MobileNavbarComponent
                  key={item.id}
                  {...item}
                  values={values}
                  setValues={setValues}
                />
              )
            })}
          </ul>
        </div>
      </div>
    </MobileNavbarWrapper>
  )
}

// CSS Style Component down ====================

const MobileNavbarWrapper = styled.nav`
  @media (min-width: 768px) {
    display: none;
  }
  .container {
    z-index: 10;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: var(--primary-9);
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
    background-color: var(--primary-9);
    overflow: hidden;
    a {
      display: block;
    }
  }
`
export default MobileNavbar
