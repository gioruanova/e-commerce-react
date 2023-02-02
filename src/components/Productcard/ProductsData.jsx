import React from 'react'
import ProductCard from './ProductCard'
import products from '../../data/produts.json'


const ProductsData = () => {
    return (
        <div className='productsGrid'>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductsData