import React from 'react';
import ProductItem from './ProductItem';

const Featured = () => {
    return (
        <div className='featured'>
            {Featured.map((e) => (
                <ProductItem product={e} />
            ))}
        </div>
    )
}

export default Featured
