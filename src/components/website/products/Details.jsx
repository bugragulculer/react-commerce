import React from 'react'

const Details = ({product, type}) => {
    return (
        <div className='details'>
            <div>
                {product.image.map((e) => (
                    <img src={e} alt={e} />
                ))}
            </div>
            <div>
                <h2>{product.announce}</h2>
                <h2>{product.type}</h2>
                <h1>{product.name}</h1>
                <h4>Variants</h4>
                <button>Add to cart</button>
                <button>Favorite</button>
                <p>{product.details}</p>
            </div>
        </div>
    )
}

export default Details
