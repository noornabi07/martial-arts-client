import React from 'react';
import { useNavigate } from 'react-router-dom';
import error from '../../assets/error.jpg'

const ErrorPage = () => {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

    return (
        <div className='text-center w-full h-full mt-28'>
            <div className='font-bold text-8xl text-gray-500'>
                <img className='w-56 mx-auto' src={error} alt="" />
                <h2 className='mt-5'>404</h2>
                <p className='font-bold text-xl mt-4'>Error</p>
            </div>
            <button onClick={handleBack} className='bg-cyan-200 py-2 px-4 font-semibold mt-4 hover:bg-cyan-400 text-xl rounded-xl'>Back To Before</button>
        </div>
    );
};

export default ErrorPage;