import React, { useContext, useEffect, useState } from 'react';
import SectionTitle from '../../SectionTitle/SectionTitle';
import { AuthContext } from '../../../Provider/AuthProvider/AuthProvider';
import MyClassRow from './MyClassRow';
import Swal from 'sweetalert2';



const MyClass = () => {
    const { user } = useContext(AuthContext);
    const [classes, setClasses] = useState([]);

    const total = classes.reduce((sum, clases) => clases.price + sum, 0);

    useEffect(() => {
        fetch(`http://localhost:5000/selectClass?email=${user.email}`)
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/selectClass/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = classes.filter(item => item._id !== id);
                            setClasses(remaining)
                        }
                    })

            }
        })
    }

    return (
        <div className='w-full bg-gray-500 px-4 pt-4 pb-20 text-white mt-5'>
            <SectionTitle subheading="Class Show Now" heading="All Select Class"></SectionTitle>

            <div className='flex uppercase gap-10 justify-between items-center'>
                <h2 className='font-semibold  text-xl'>Total Selected Class: {classes.length}</h2>
                <h2 className='font-semibold text-xl'>Total Price: ${total}</h2>
                <button className="btn btn-sm bg-pink-500 text-white font-semibold">Payment</button>
            </div>

            <div className="overflow-x-auto mt-9">
                <table className="table border rounded">
                    {/* head */}
                    <thead className='font-semibold text-lg text-purple-700'>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Instructor</th>
                            <th>Email</th>
                            <th>Seats</th>
                            <th>Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            classes.map((singleClass, index) => <MyClassRow
                                key={singleClass._id}
                                singleClass={singleClass}
                                handleDelete={handleDelete}
                                index={index}
                            ></MyClassRow>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyClass;