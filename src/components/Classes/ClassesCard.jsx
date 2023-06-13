import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';


const ClassesCard = ({ Singleclass }) => {
    const { user } = useContext(AuthContext);
    const { name, image, instructor, seats, price, _id } = Singleclass;
    const navigate = useNavigate();
    const location = useLocation();
    const isAdmin = useAdmin();
    const isInstructor = useInstructor();

    const handleAddClass = () => {
        if (user && user.email) {
            const selectClasses = { selectClassId: _id, name, image, instructor, seats, price, email: user.email }

            fetch('http://localhost:5000/selectClass', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectClasses)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Your class selected',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login First',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (
        <div>

            <div className={`card w-96 shadow-xl ${seats === 0 ? "bg-red-500" : "bg-base-100"}`}>
                <figure><img className='hover:scale-125 hover:duration-300' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        <div className="badge badge-secondary">Class: {name}</div>
                    </h2>
                    <p>Instructor: {instructor}</p>
                    <div className="card-actions justify-center mt-4 items-center">
                        <div className="badge badge-outline">Seats: {seats}</div>
                        <div className="badge badge-outline">Price: ${price}</div>

                        {isAdmin && isInstructor && seats == 0 ? <button disabled onClick={handleAddClass} className="btn btn-sm bg-gray-600 text-white">Select</button> : <button onClick={handleAddClass} className="btn btn-sm bg-gray-600 text-white">Select</button>}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;