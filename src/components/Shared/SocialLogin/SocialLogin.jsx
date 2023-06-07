import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../Provider/AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSign = () =>{
        googleSignIn()
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            navigate(from)

        })
        .catch(error =>{
            setError(error.message);
        })
    }

    return (
        <div>
            <div>
            <div className="divider">OR</div>
            <button onClick={handleGoogleSign} className="btn btn-circle btn-outline">
               <FaGoogle></FaGoogle>
            </button>
        </div>
        </div>
    );
};

export default SocialLogin;