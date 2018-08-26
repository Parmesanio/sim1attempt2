import React from 'react';
import { Link } from 'react-router-dom';
import './product.css';

const Product = (props) => {
    
    let { id, product_name, product_url, product_price, handleDelete } = props;
    return ( 
        <div className="product">
            {product_url ? <img src={product_url} alt={product_name} /> : <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPy_NEAAMLGbTWWl-v7Y0qhZ-0xofMmLfCp87l7MdbkdVYdvafYA' alt={product_name} />}
            <div className="details">
                <h3>{product_name}</h3>
                <p>{product_price}</p>
                <button className="delete" onClick={() => handleDelete(id)}>Delete</button>
                <Link to={`/edit/${id}`}><button className="edit">Edit</button></Link>
            </div>
        </div>
     );
}
 
export default Product;