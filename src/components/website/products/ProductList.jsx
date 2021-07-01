import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({type}) => {
    const products = [];
    return (
        <div className={`product__list--${type}`}>
            {products.map((e) => (
                <ProductItem product={e} />
            ))}
        </div>
    )
}

export default ProductList
