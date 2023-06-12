import React, { useContext, useEffect, useReducer, useState } from 'react';
import useAddClasses from '../../../hooks/useAddClasses';
import SectionTitle from '../../../SectionTitle/SectionTitle';
import { AuthContext } from '../../../../Provider/AuthProvider/AuthProvider';

const Myclasses = () => {
   const [myAddClasses, setAddClasses] = useState([])

    const {user} = useContext(AuthContext)
    useEffect( () =>{
        fetch(`http://localhost:5000/myClasses/${user.email}`)
        .then(res => res.json())
        .then(data => setAddClasses(data))
    }, [])

    return (
        <div>
            <SectionTitle subheading="Your Added All Class" heading="Your Class Info"></SectionTitle>

            {/* tablae */}
            <div className="overflow-x-auto">
                <table className="table border">
                    {/* head */}
                    <thead className='font-semibold'>
                        <tr>
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Status</th>
                            <th>Enrolled Students</th>
                            <th>Feedback</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myAddClasses.map((singleClass, index) =>  <tr key={singleClass._id}>
                                <th>{index + 1}</th>
                                <td>{singleClass.name}</td>
                                <td>{singleClass.status}</td>
                                <td>0</td>
                                <td>Coming</td>
                                <td>
                                <button className="btn btn-sm bg-gray-600 text-white">Update</button>
                                </td>
                            </tr>)
                        }
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Myclasses;