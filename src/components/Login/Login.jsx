import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../firebase/AuthProvider';

const Login = () => {

    const{signIn} = useContext(AuthContext);
    const navigate = useNavigate()

    const [error, setError] = useState("");

    const handleLogIn = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result=>{
            console.log(result.user)
            form.reset();
            navigate('/')
        })
        .catch(err => {
            setError(err.message)
        })
    }


    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogIn}>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p className='text-error'>{error}</p>
            <p><small>New to Ema Jhon? <Link to="/SignUp">Create an Account</Link></small></p>
        </div>
    );
};

export default Login;