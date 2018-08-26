import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return ( 
        <header>
            <div className="logo">
            <h1>Logo</h1>
            </div>
            <nav>
            <Link to="/">Dashboard</Link>
            <Link to="/add">Add to Inventory</Link>
            </nav>
            </header>
     );
}
 
export default Header;