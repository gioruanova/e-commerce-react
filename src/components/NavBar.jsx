import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import CartWidget from './CartWidget'


export const NavBar = () => {

  let quantityUpdate = 5
  

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
                <a className='navLink' href="/">Nosotros</a>
                <div className='navLink subCursos' href="/">Cursos
                  <div className='subNavLinkCursos'>
                    <a className='navLink' href="/">HTML, CSS, Bootstrap</a>
                    <a className='navLink' href="/">JQuery</a>
                    <a className='navLink' href="/">Javascript</a>
                    <a className='navLink' href="/">React JS</a>
                    <a className='navLink' href="/">Angular Js</a>
                  </div>
                </div>
                <div className='navLink subCarreras' href="/">Carreras
                  <div className='subNavLinkCarreras'>
                    <a className='navLink' href="/">Programacion</a>
                    <a className='navLink' href="/">Desarrollo Web</a>
                    <a className='navLink' href="/">Big Data</a>
                    <a className='navLink' href="/">Cyberseguridad</a>
                    <a className='navLink' href="/">Redes</a>
                  </div>
                </div>
                <a className='navLink' href="/">Capacitaciones</a>
                <a className='navLink' href="/">Contacto</a>
              </div>

              <a href="/">
                <CartWidget quantity={quantityUpdate} />
              </a>
            </div>

          </div>
          <div className='navBarrMobile'>
            <a href="/">
              <div className='navLogo'></div>
            </a>
            <div className='mobile-menu-cart'>
              <a href="/">
                <CartWidget quantity={quantityUpdate} />
              </a>
              <div class="burger-menu">
                <FontAwesomeIcon icon={faBars} />
                {/* <FontAwesomeIcon icon={faXmark} /> */}
              </div>
            </div>
            <div className='navLinks'>
              <a className='navLink' href="/">Nosotros</a>

              <div className='navLink mobileSub' href="/">Cursos
                <div className='subNavLinkCursos'>
                  <a className='navLink' href="/">HTML, CSS, Bootstrap</a>
                  <a className='navLink' href="/">JQuery</a>
                  <a className='navLink' href="/">Javascript</a>
                  <a className='navLink' href="/">React JS</a>
                  <a className='navLink' href="/">Angular Js</a>
                </div>
              </div>

              <div className='navLink mobileSub' href="/">Carreras
                <div className='subNavLinkCarreras'>
                  <a className='navLink' href="/">Programacion</a>
                  <a className='navLink' href="/">Desarrollo Web</a>
                  <a className='navLink' href="/">Big Data</a>
                  <a className='navLink' href="/">Cyberseguridad</a>
                  <a className='navLink' href="/">Redes</a>
                </div>
              </div>


              <a className='navLink' href="/">Capacitaciones</a>
              <a className='navLink' href="/">Contacto</a>
            </div>
          </div>

        </div>

      </div>
    </>

  )
}




