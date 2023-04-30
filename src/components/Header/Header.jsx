import React, { useContext } from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../firebase/AuthProvider';

const Header = () => {

    const {user, logOut} = useContext(AuthContext)
    const handleSignOut= () =>{
        logOut()
        .then(result=>{
            alert("Logged out")
        })
        .catch(err => {
            console.log(err)
        })
    }
    return (
        <div>
            <nav>
                <div className='header'>
                    <img src={logo} alt="" />
                    <div>
                        <Link to="/">Shop</Link>
                        <Link to="/Order-Review">Order Review</Link>
                        <Link to="/Manage-Inventory">Manage Inventory</Link>
                        {user ? <span></span> : <Link to="/Login">Login</Link>}
                        {user ? <span></span> : <Link to="/SignUp">Sign Up</Link>}
                        {user && <span className='text-white'>Welcome {user.email} <button onClick={handleSignOut}>Sign Out</button></span>}
                    </div>
                    
                </div>
            </nav>
        </div>
    );
};

export default Header;