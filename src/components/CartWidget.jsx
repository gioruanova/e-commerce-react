import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const CartWidget = ({quantity}) => {
    return (
        <div className='navCart'>
            <FontAwesomeIcon icon={faCartShopping} />
            <span>{quantity}</span>
        </div>
    )
}

export default CartWidget