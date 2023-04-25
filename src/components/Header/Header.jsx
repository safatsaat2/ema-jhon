import React, { useContext } from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../firebase/AuthProvider';

const Header = () => {

    const {user} = useContext(AuthContext)
    return (
        <div>
            <nav>
                <div className='header'>
                    <img src={logo} alt="" />
                    <div>
                        <Link to="/">Shop</Link>
                        <Link to="/Order-Review">Order Review</Link>
                        <Link to="/Manage-Inventory">Manage Inventory</Link>
                        <Link to="/Login">Login</Link>
                        <Link to="/SignUp">Sign Up</Link>
                        {user && <span>Welcome {user.email}</span>}
                    </div>
                    
                </div>
            </nav>
        </div>
    );
};

export default Header;