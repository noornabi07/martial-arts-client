import React, { useEffect, useState } from 'react';
import { BsArrowRight } from 'react-icons/Bs';

const Trailer = () => {
    const [trailers, setTrailers] = useState([]);

    useEffect(() => {
        fetch('trailer.json')
            .then(res => res.json())
            .then(data => setTrailers(data))
    }, [])

    return (
        <div className='bg-gray-700 my-32 py-8 rounded-lg'>
            <div className='text-center w-1/2 mx-auto my-20'>
                <h2 className='text-3xl font-bold text-orange-500'>Trailer Actions</h2>
                <p className='text-gray-200 mt-4'>Porta augue amet ac metus hac senectus auctor lacus consequat pretium. Vivamus nisl cras neque etiam risus natoque malesuada. Curabitur curae at sed mattis praesent condimentum placerat massa ultrices tellus.</p>
            </div>

            <div className='grid lg:grid-cols-3 lg:gap-8 lg:mx-10'>
                {
                    trailers.map(trailer => <div key={trailer.id}>
                        <div className="card px-3 card-compact lg:w-96 mt-5 md:mt-0 shadow-xl hover:scale-110 hover:duration-300">
                            <figure><img className='' src={trailer.img} alt="Shoes" /></figure>
                            <div className="card-body bg-slate-900 text-white">
                                <div className='text-center'>
                                    <h2 className="text-2xl font-bold mb-3">{trailer.name}</h2>
                                    <p className='font-semibold text-sm tracking-wide'>{trailer.details}</p>
                                    <div className='flex items-center justify-center mt-5 ml-12 text-red-500 cursor-pointer hover:text-white'>
                                        <p className='uppercase'>Learn More</p>
                                        <p className='-ml-16'><BsArrowRight></BsArrowRight></p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Trailer;