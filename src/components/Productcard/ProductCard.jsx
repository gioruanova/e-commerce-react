import React, { useState } from 'react'



export default function ProductCard({ product }) {
  const [value, setValue] = useState(0)

  return (
    <div className={product.stock ? `productCard` : `productCard grayPicture`}>
      <img className="productPicture" src={product.picture} alt={product.name} />
      <div className="productInfo">
        <div className='productMainData'>
          <h3>{product.name}</h3>
          <p>{product.specs}</p>
        </div>
        <div className='productSecondaryData'>
          <div className="productPrice"><p>Precio: </p> <span>${product.price.toLocaleString('en-US')}</span></div>
          {product.stock ? <div className={value === product.units ? `productUnits hideStock` : `productUnits`}><p>Stock: </p><span>{product.units - value}</span></div> : <p className="productstock">SIN STOCK</p>}
        </div>

        {product.stock &&
          <>
            <div className='availableStockButtons'>
              <div className="buySection">
                <div className="quantityBox">
                  <p className="quantityValue">{value}</p>
                  <div className="auntityControls">
                    <span onClick={() => setValue(value < 1 ? value : value - 1)}>-</span>
                    <span onClick={() => setValue(value < product.units ? value + 1 : value)}>+</span>
                  </div>
                </div>
                <button onClick={() => (alert(`${product.name} (x${value}) agregado al carrito`))} >Add to Cart</button>
              </div>
              {value >= product.units && <div className="lastUnitMessage">Sin mas unidades disponibles!!!</div>}
            </div>
          </>}

      </div>

    </div >
  )

}

