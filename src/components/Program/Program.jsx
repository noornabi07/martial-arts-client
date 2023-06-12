import React from 'react';
import program1 from '../../assets/program1.jpg';
import program2 from '../../assets/program2.jpg'
import { Link } from 'react-router-dom';

const Program = () => {
    return (
        <div className='grid grid-cols-3 gap-5 items-center'>
            <div data-aos="fade-right" data-aos-duration="1500">
                <h4 className='text-red-500 font-semibold'>CLASS PROGRAM</h4>
                <h2 className='text-5xl font-bold my-4'>Get the training best trainers</h2>
                <p className='my-4 font-semibold text-gray-600'>Explore the philosophical aspects of the martial art style. Some martial arts emphasize spiritual growth, mental discipline</p>
                <div className='grid grid-cols-2 gap-2'>
                    <button className="btn  btn-secondary font-bold">Descover</button>
                    <Link to="/register">
                        <button className="btn  btn-secondary font-bold">Join Membership</button>
                    </Link>
                </div>
            </div>
            <div>
                <img data-aos="fade-up" data-aos-duration="1500" className='md:h-[450px] rounded-md ' src={program1} alt="" />
            </div>
            <div>
                <img data-aos="fade-down" data-aos-duration="1500"  className='md:h-[450px] rounded-md ' src={program2} alt="" />
            </div>
        </div>
    );
};

export default Program;