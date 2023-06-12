import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';

const PopularInstruction = () => {
    const [popularInstructors, setPopularInstructors] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/popularInstructors')
            .then(res => res.json())
            .then(data => setPopularInstructors(data))
    }, [])


    return (
        <div className='bg-gray-700 my-32 py-8 lg:px-5 pb-10 rounded-lg'>
            <div>
                <h2 className='font-bold text-2xl text-white text-center'>Popular Instructors</h2>
                <p></p>
            </div>

            <div className='grid lg:grid-cols-3 lg:gap-8'>
                {
                    popularInstructors.map(instructor => <div key={instructor._id}>
                        <div data-aos="zoom-in" data-aos-duration="1000" className="card card-compact lg:w-96 px-3 mt-5 md:mt-0 shadow-xl">
                            <figure><img className='hover:scale-125 hover:duration-300' src={instructor.image} alt="Shoes" /></figure>
                            <div className="card-body bg-slate-800 text-white">
                                <h2 className="card-title">{instructor.name}</h2>
                                <p>{instructor.email}</p>
                                <div className="card-actions justify-end">
                                    <Link to="/login">
                                        <button className="btn btn-sm text-slate-900 hover:bg-red-600 hover:text-white">Booking Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>


        </div>
    );
};

export default PopularInstruction;