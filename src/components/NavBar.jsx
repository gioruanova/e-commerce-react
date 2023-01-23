import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons'


export const NavBar = () => {


  return (
    <>
      <div className='navContainer'>
        <div className='navBarInnerContainer'>

          <div className='navbarDesktop'>
            <a href="/">
              <div className='navLogo'></div>
            </a>
            <div className='navigationDesktop'>
              <div className='navLinks'>
                <a className='navLink' href="/">Navigation 1</a>
                <a className='navLink' href="/">Navigation 2</a>
                <a className='navLink' href="/">Navigation 3</a>
                <a className='navLink' href="/">Navigation 4</a>
                <a className='navLink' href="/">Navigation 5</a>
              </div>

              <a href="/">
                <div className='navCart'>
                  <FontAwesomeIcon icon={faCartShopping} />
                  <span>(0)</span>
                </div>
              </a>
            </div>

          </div>
          <div className='navBarrMobile'>
            <a href="/">
              <div className='navLogo'></div>
            </a>
            <div className='mobile-menu-cart'>
              <a href="/">
                <div className='navCart'>
                  <FontAwesomeIcon icon={faCartShopping} />
                  <span>(0)</span>
                </div>
              </a>
              <div class="burger-menu">
                <FontAwesomeIcon icon={faBars} />
                {/* <FontAwesomeIcon icon={faXmark} /> */}
              </div>
            </div>
            <div className='navLinks'>
              <a className='navLink' href="/">Navigation 1</a>
              <a className='navLink' href="/">Navigation 2</a>
              <a className='navLink' href="/">Navigation 3</a>
              <a className='navLink' href="/">Navigation 4</a>
              <a className='navLink' href="/">Navigation 5</a>
            </div>
          </div>

        </div>

      </div>
    </>

  )
}




