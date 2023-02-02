import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import CartWidget from './CartWidget'
import navbarLinks from '../../data/navbarData.json'


export const NavBar = () => {
  let quantityUpdate = 5;

  let navShow = "";

  const [toggle, setToggle] = useState(true)


  return (
    <div className='navbarContainer'>
      <div className='navBarInnerContainer'>
        <a rel="noreferrer" href="/">
          <span className={`navLogo ${toggle ? navShow : navShow = `hideLogo`}`}></span>
        </a>
        <ul className={`mainNavigation ${toggle ? navShow : navShow = `showMenu`}`}>
          {navbarLinks.map((e, index) => (
            <li key={index} className='topNav'><a href={e.url}>{e.name}</a>
              {e.subLinks &&
                <ul className='subLinks'>
                  {e.subLinks.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a href={item.url}>{item.name}</a>
                    </li>))}
                </ul>}
            </li>))}
        </ul>
        <div className='cartContainer'>
          <a href="/">
            <CartWidget quantity={quantityUpdate} />
          </a>
        </div>
        <div className="burger-menu" onClick={() => setToggle(!toggle)}>
          {toggle ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faXmark} />}</div>
      </div>
    </div>
  );
}




