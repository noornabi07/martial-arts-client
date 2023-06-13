import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';

const PopularClass = () => {
    const [popularClasses, setPopularClasses] = useState([])
    console.log(popularClasses)
    useEffect(() => {
        fetch(`http://localhost:5000/popularClasses`)
            .then(res => res.json())
            .then(data => {
                setPopularClasses(data)
            })
    }, [])

    return (
        <div>
            <SectionTitle subheading="Popular Classes" heading="Best Classes"></SectionTitle>

            <div className='grid lg:grid-cols-3 lg:gap-8'>
                {
                    popularClasses.map(popular => <div key={popular._id}>
                        <div data-aos="zoom-in" data-aos-duration="1000" className="card card-compact lg:w-96 px-3 mt-5 md:mt-0 shadow-xl">
                            <figure><img className='hover:scale-125 hover:duration-300' src={popular.image} alt="Shoes" /></figure>
                            <div className="card-body bg-slate-800 text-white">
                                <h2 className="card-title">{popular.name}</h2>
                                <p>Seats: {popular.seats}</p>
                                <p>Seats: {popular.student}</p>
                                <div className="card-actions justify-end">
                                    <Link to="/login">
                                        <button className="btn btn-sm text-slate-900 hover:bg-red-600 hover:text-white bg-white">Booking Now</button>
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

export default PopularClass;