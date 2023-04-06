import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <div className='header'>
                    <img src={logo} alt="" />
                    <div>
                        <Link to="/">Order</Link>
                        <Link to="/Order-Review">Order Review</Link>
                        <Link to="/Manage-Inventory">Manage Inventory</Link>
                        <Link to="/Login">Login</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;