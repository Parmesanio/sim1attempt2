import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <header>
            <Link to="/">Dashboard</Link>
            <Link to="/add">Add to Inventory</Link>
            </header>
     );
}
 
export default Header;