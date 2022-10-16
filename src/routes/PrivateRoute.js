import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/UseContext';

const PrivateRoute = ({children}) => {
    
    const { user, loading } = useContext(AuthContext);
    if(loading){
        return <div>Loading ....</div>
    }
    if(user && user.uid){
        return children;
    }
    return <Navigate to="/register"></Navigate>;
};

export default PrivateRoute;