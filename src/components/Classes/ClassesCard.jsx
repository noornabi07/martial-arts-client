import React from 'react';

const ClassesCard = ({Singleclass}) => {
    const {name, image, instructor, seats, price} = Singleclass;
    return (
        <div>
            
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        <div className="badge badge-secondary">Class: {name}</div>
                    </h2>
                    <p>Instructor: {instructor}</p>
                    <div className="card-actions justify-center mt-4 items-center">
                        <div className="badge badge-outline">Seats: {seats}</div>
                        <div className="badge badge-outline">Price: {price}</div>
                        <button className="btn btn-sm bg-gray-500 text-white">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;