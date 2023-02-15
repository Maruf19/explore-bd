import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../../contexts/AuthProvider';
import Spinner from '../../Spinner/Spinner';


const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Spinner/>
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;