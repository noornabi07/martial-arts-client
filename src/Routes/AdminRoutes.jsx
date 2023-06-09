import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';
import { useLocation } from 'react-router-dom';
import useAdmin from '../components/hooks/useAdmin';

const AdminRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    const [isAdmin, isAdminLoading] = useAdmin();

    if(loading || isAdminLoading){
        return <div className='w-32 mx-auto my-8'>
             <button className="btn loading">loading</button>
         </div>
     }

     if(user && isAdmin){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default AdminRoutes;