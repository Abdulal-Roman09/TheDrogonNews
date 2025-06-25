import React from 'react'
import { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';

const PrivateRouts = ({children}) => {
    const {user,loading}=use(AuthContext)
    if(user && user?.email){
        return children
    }return <Navigate to={"/login"}></Navigate>
    
  
}

export default PrivateRouts
