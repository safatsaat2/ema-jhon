import React, { useContext } from 'react';
import { AuthContext } from '../firebase/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user, loader} = useContext(AuthContext)

    if(loader){
        return <div>Loading....</div>
    }

    if(user){
        return children;
    }

    return <Navigate  to='/Login'></Navigate>
};

export default PrivateRoute;