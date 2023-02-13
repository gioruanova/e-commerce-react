import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footerContainer'>
      <div className='copy'>
        2023 <Link to="/">Coder React</Link>. Todos los derechos reservados
      </div>
    </div>
  )
}

export default Footer