import React from 'react';

const Product = (props) => {
    
    let { id, product_name, product_url, product_price, handleDelete } = props;
    return ( 
        <div>
            <img src={product_url} alt={product_name} />
            <h3>{product_name}</h3>
            <p>{product_price}</p>
            <button onClick={() => handleDelete(id)}>Delete</button>
            <button>Edit</button>
        </div>
     );
}
 
export default Product;