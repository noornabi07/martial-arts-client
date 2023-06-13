import React from 'react';
import SectionTitle from '../../SectionTitle/SectionTitle';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import MyClassRow from './MyClassRow/MyClassRow';

const AllClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: allclasses = [], refetch } = useQuery(['allClasses'], async () => {
        const res = await axiosSecure.get('/allClasses')
        return res.data;
    });


    return (
        <div>
            <SectionTitle subheading="Action Now Admin" heading="Manage Classes"></SectionTitle>

            {/* table */}
            <div className="overflow-x-auto">
                <table className="table border">
                    {/* head */}
                    <thead className='text-orange-300 text-sm'>
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
                            allclasses.map((singleClass, index) =>
                                <MyClassRow singleClass={singleClass}
                                index={index}
                                refetch={refetch}
                                ></MyClassRow>
                                )


                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllClasses;

{/* <tr key={singleClass._id}>

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
    {/* <button className="btn btn-sm bg-orange-600 text-white
    ">Feedback</button> */}

//     <button className="btn btn-xs" onClick={() => showModal(singleClass._id)}>open modal</button>
//     <dialog id={`my_modal_${singleClass._id}`} open={modalOpen} className="modal">

//         <div method="dialog">
//             <button className="btn btn-xs text-white bg-red-500 hover:bg-black" onClick={closeModal}>✕</button>
//             <form onSubmit={sendFeedback} className="modal-box">
//                 <input
//                     name='feedback'
//                     placeholder="Write your feedback here..."
//                     rows="4"
//                     className="w-full p-2 mt-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 ></input>
//                 <input className="btn text-white bg-red-500 hover:bg-black" type="submit" value="feedback" />
//             </form>
//         </div>
//     </dialog>
// </td>
// </tr> */}