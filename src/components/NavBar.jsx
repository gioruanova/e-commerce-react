import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import CartWidget from './CartWidget'



export const NavBar = () => {
  let quantityUpdate = 5;

  let navShow = "";

  const [toggle, setToggle] = useState(true)





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
                <div className='navLink subPc' href="/">PC
                  <div className='subNavLinkPc'>
                    <a className='navLink' href="/">Gabinetes</a>
                    <a className='navLink' href="/">Memorias</a>
                    <a className='navLink' href="/">Almacenamiento</a>
                    <a className='navLink' href="/">Placas graficas</a>
                    <a className='navLink' href="/">Gaming</a>
                  </div>
                </div>
                <div className='navLink subTelefonia' href="/">Telefonia
                  <div className='subNavLinkTelefonia'>
                    <a className='navLink' href="/">Telefonos</a>
                    <a className='navLink' href="/">Accesorios</a>
                    <a className='navLink' href="/">Cargadores</a>
                    <a className='navLink' href="/">Displays</a>
                    <a className='navLink' href="/">Audio</a>
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
              <div class="burger-menu" onClick={() => setToggle(!toggle)}>
                {toggle ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faXmark} />}
                

              </div>
            </div>
            <div className={`navLinks ${toggle ? navShow : navShow = `showMenu`}`}>
              <a className='navLink' href="/">Nosotros</a>

              <div className='navLink mobileSub' href="/">Cursos
                <div className='subNavLinkPc'>
                  <a className='navLink' href="/">Gabinetes</a>
                  <a className='navLink' href="/">Memorias</a>
                  <a className='navLink' href="/">Almacenamiento</a>
                  <a className='navLink' href="/">Placas graficas</a>
                  <a className='navLink' href="/">Gaming</a>
                </div>
              </div>

              <div className='navLink mobileSub' href="/">Carreras
                <div className='subNavLinkTelefonia'>
                  <a className='navLink' href="/">Telefonos</a>
                  <a className='navLink' href="/">Accesorios</a>
                  <a className='navLink' href="/">Cargadores</a>
                  <a className='navLink' href="/">Displays</a>
                  <a className='navLink' href="/">Audio</a>
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




