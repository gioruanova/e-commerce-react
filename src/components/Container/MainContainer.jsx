import React from 'react'

import ProductsData from '../Productcard/ProductsData'

const MainContainer = ({ initialWelcome }) => {
  return (
    <div className='mainContainer'>
      <h1>{initialWelcome}</h1>
      <ProductsData />

    </div>
  )
}

export default MainContainer