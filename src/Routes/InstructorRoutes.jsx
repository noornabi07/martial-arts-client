import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';
import { useLocation } from 'react-router-dom';
import useInstructor from '../components/hooks/useInstructor';


const InstructorRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    const [isInstructor, isInstructorLoading] = useInstructor();

    if(loading || isInstructorLoading){
        return <div className='w-32 mx-auto my-8'>
             <button className="btn loading">loading</button>
         </div>
     }

     if(user && isInstructor){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default InstructorRoutes;