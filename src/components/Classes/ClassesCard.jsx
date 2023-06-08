import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const ClassesCard = ({Singleclass}) => {
    const {user} = useContext(AuthContext);
    const {name, image, instructor, seats, price} = Singleclass;
    const navigate = useNavigate();

    const handleAddClass = clas =>{
        console.log(clas)
        if(user){
            fetch('http://localhost:5000/selecClasses')
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please Login First',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login')
                }
              })
        }
    }

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
                        <button onClick={handleAddClass} className="btn btn-sm bg-gray-500 text-white">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;