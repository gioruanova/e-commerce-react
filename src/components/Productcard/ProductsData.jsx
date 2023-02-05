import React from 'react'
import ProductCard from './ProductCard'
import {Products} from '../../data/Produts'


const ProductsData = () => {
    return (
        <div className='productsGrid'>
            {Products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductsData