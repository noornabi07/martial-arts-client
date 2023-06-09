import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SectionTitle from '../../SectionTitle/SectionTitle';
import { FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Allusers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['allusers'], async () => {
        const res = await axiosSecure.get('/allusers')
        return res.data;
    });

    console.log(users)

    const handleMakeAdmin = user =>{
        fetch(`http://localhost:5000/allusers/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: `${user.name} is now admin`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    const handleMakeInstructor = user =>{
        fetch(`http://localhost:5000/allusers/instructor/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: `${user.name} is now Instructor`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    return (
        <div className='bg-gray-500 px-4 pt-4 pb-20 text-white mt-5'>
            <SectionTitle heading="Action Now" subheading="Manage All Users"></SectionTitle>
            <h2 className='text-2xl font-semibold '>Total Users: {users.length}</h2>

            {/* table */}
            <div className="overflow-x-auto">
                <table className="table border mt-5">
                    {/* head */}
                    <thead className='text-lg font-semibold text-yellow-300'>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action Admin</th>
                            <th>Action instructor</th>
                        </tr>
                    </thead>
                    <tbody className='text-lg'>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td className='text-center'>
                                    {user.role === 'admin' ? 'admin':  
                                        <button onClick={() => handleMakeAdmin(user)} className='btn btn-ghost bg-orange-400'>
                                            <FaUserShield></FaUserShield>
                                        </button>
                                    }
                                </td>
                                <td className='text-center'>
                                    {
                                        user.role === 'instructor' ? 'instructor' :
                                        <button onClick={() => handleMakeInstructor(user)} className='btn btn-ghost bg-orange-400'>
                                            <FaUserShield></FaUserShield>
                                        </button>
                                    }
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allusers;