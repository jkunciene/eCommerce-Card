import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar_logo'>
                <h2>Shopping Cart</h2>
            </div>  

            <ul className="navbar_links">
                <li>
                    <Link to="/cart">
                    
                    </Link>
                </li>
            </ul> 
        </nav>
    )
}

export default Navbar
