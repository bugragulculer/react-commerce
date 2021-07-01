import React from 'react'
import { Link } from 'react-router-dom';

function ProductItem({product}) {
    return (
        <Link to={`/products/${product.id}`} className={`product__item`}>
        <img src={product.image} alt="" />
        <h4>{product.announce}</h4>
        <h3>{product.title}</h3>
        <h3>{product.price}</h3>
        <h5>{product.type}</h5>
        </Link>
    )
}

export default ProductItem
