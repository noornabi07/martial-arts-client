import React from 'react';
import SectionTitle from '../../SectionTitle/SectionTitle';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const AllClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: allclasses = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes')
        return res.data;
    });

    const handleMakeApproved = id => {
        fetch(`http://localhost:5000/classes/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Your Class Approved now',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleMakeDeny = id => {
        fetch(`http://localhost:5000/classes/deny/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Your Class Deny Now',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div>
            <SectionTitle subheading="Action Now Admin" heading="Manage Classes"></SectionTitle>

            {/* table */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Instructor</th>
                            <th>Email</th>
                            <th>Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Approve</th>
                            <th>Deny</th>
                            <th>feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allclasses.map((singleClass, index) => <tr key={singleClass._id}>

                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={singleClass.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{singleClass.name}</td>
                                <td>{singleClass.instructor}</td>
                                <td>{singleClass.email}</td>
                                <td>{singleClass.seats}</td>
                                <td>{singleClass.price}</td>
                                <td>{singleClass.status}</td>
                              

                                {<> <td>
                                    <button
                                        disabled={
                                            singleClass.status === "deny" || singleClass.status === "approved"
                                        }
                                        onClick={() => handleMakeApproved(singleClass._id)}
                                        className='btn btn-sm bg-green-500 text-white'>Approve</button>
                                </td>
                                    <td>
                                        <button
                                            disabled={
                                                singleClass.status === "deny" || singleClass.status === "approved" 
                                            }
                                            onClick={() => handleMakeDeny(singleClass._id)}
                                            className='btn btn-sm bg-red-500 text-white'>Deny</button>
                                    </td> </>}


                                <td>
                                    <button className="btn btn-sm bg-orange-600 text-white
                                    ">Feedback</button>
                                </td>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllClasses;