import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const CardWidget = ({quantity}) => {
    return (
        <div className='navCart'>
            <FontAwesomeIcon icon={faCartShopping} />
            <span>{quantity}</span>
        </div>
    )
}

export default CardWidget