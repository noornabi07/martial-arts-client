import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider/AuthProvider';
import SectionTitle from '../../../SectionTitle/SectionTitle';
import { BsCheckCircleFill } from 'react-icons/Bs';

const EnrolledClass = () => {
    const { user } = useContext(AuthContext);
    const [enrolled, setEnrolled] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/enrolledClass/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setEnrolled(data);
            })
    }, [])

    return (
        <div>

            <SectionTitle subheading="Your Enrolled History" heading="Enrolled Class"></SectionTitle>

            <div className="overflow-x-auto">
                <table className="table border">
                    {/* head */}
                    <thead className='font-lg text-orange-400'>
                        <tr>
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Transaction Id</th>
                            <th>Date</th>
                            <th>Enrolled</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enrolled.map((enrol, index) => <tr key={enrol._id}>
                                <th>{index + 1}</th>
                                <td>{enrol.name}</td>
                                <td>{enrol.price}</td>
                                <td>{enrol.transactionId}</td>
                                <td>{enrol.date}</td>
                                <th className='text-green-500 text-2xl'>
                                    <BsCheckCircleFill></BsCheckCircleFill>
                                </th>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EnrolledClass;