import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({ id, title, price, description, image, rating }) => {
    return (
        <div>
            <h3>{title}</h3>
            <img src={image} />
            <p>$ {price}</p>
            <p>Description: {description}</p>
            <p>Stock: {rating.count}</p>
            <p>Sku: 56632215594515</p>
            <Link to={`details/${id}`}>
                <button >Details</button>
            </Link>
        </div>
    )
}
