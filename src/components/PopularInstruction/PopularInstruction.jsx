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
        <div className='bg-gray-700 my-32 py-8 px-5 pb-10 rounded-lg'>
            <SectionTitle heading="Best Instructors" subheading="Popular Instruction"></SectionTitle>

            <div className='grid grid-cols-3 gap-8'>
                {
                    popularInstructors.map(instructor => <div key={instructor._id}>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
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