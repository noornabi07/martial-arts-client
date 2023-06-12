import React from 'react';

const InstructorsCard = ({data}) => {
    const {name, image, email} = data;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-lg mt-5 text-center">
                <figure><img className='rounded-lg hover:scale-125 hover:duration-300' src={image} alt="Shoes" /></figure>
                <div className="card-body bg-slate-700 text-white">
                    <h2 className="card-title flex justify-center text-2xl">
                        <div className="badge badge-secondary">{name}</div>
                    </h2>
                    <p className=' text-xl'>{email}</p>
                </div>
            </div>
        </div>
    );
};

export default InstructorsCard;