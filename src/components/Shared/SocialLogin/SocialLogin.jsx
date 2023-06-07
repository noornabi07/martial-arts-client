import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div>
            <div>
            <div className="divider">OR</div>
            <button className="btn btn-circle btn-outline">
               <FaGoogle></FaGoogle>
            </button>
        </div>
        </div>
    );
};

export default SocialLogin;