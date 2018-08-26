import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    
    let { id, product_name, product_url, product_price, handleDelete } = props;
    return ( 
        <div>
            <img src={product_url} alt={product_name} />
            <h3>{product_name}</h3>
            <p>{product_price}</p>
            <button onClick={() => handleDelete(id)}>Delete</button>
            <Link to={`/edit/${id}`}><button>Edit</button></Link>
        </div>
     );
}
 
export default Product;