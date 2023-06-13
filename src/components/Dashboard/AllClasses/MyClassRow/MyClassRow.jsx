import React, { useState } from 'react';
import Swal from 'sweetalert2';

const MyClassRow = ({ singleClass, refetch}) => {
    const { name, instructor, image, email, seats, price, status, _id } = singleClass
console.log(_id);
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

    // Feedback modal
    const showModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const [modalOpen, setModalOpen] = useState(false);

    const sendFeedback = (event) => {
    
        event.preventDefault();
        const form = event.target;
        const feedback = form.feedback.value;
        const requestBody = {
            feedback: feedback // Wrap the feedback value inside an object property
        };

        console.log(feedback)
        fetch(`http://localhost:5000/addClasses/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    form.reset();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Your Feedback Send Done !`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    };




    return (
        <>
            <tr>
                
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={image} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                    </div>
                </td>

                <td>{name}</td>
                <td>{instructor}</td>
                <td>{email}</td>
                <td>{seats}</td>
                <td>{price}</td>
                <td>{status}</td>


                {<> <td>
                    <button
                        disabled={
                            status === "deny" || status === "approved"
                        }
                        onClick={() => handleMakeApproved(_id)}
                        className='btn btn-sm bg-green-500 text-white'>Approve</button>
                </td>
                    <td>
                        <button
                            disabled={
                                status === "deny" || status === "approved"
                            }
                            onClick={() => handleMakeDeny(_id)}
                            className='btn btn-sm bg-red-500 text-white'>Deny</button>
                    </td> </>}


                <td>
                    {/* <button className="btn btn-sm bg-orange-600 text-white
    ">Feedback</button> */}

                    <button className="btn btn-xs" onClick={() => showModal(singleClass._id)}>open modal</button>
                    <dialog id={`my_modal_${singleClass._id}`} open={modalOpen} className="modal">

                        <div method="dialog">
                            <button className="btn btn-xs text-white bg-red-500 hover:bg-black" onClick={closeModal}>✕</button>
                            <form onSubmit={sendFeedback} className="modal-box">
                                <input
                                    name='feedback'
                                    placeholder="Write your feedback here..."
                                    rows="4"
                                    className="w-full p-2 mt-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                ></input>
                                <input className="btn text-white bg-red-500 hover:bg-black" type="submit" value="feedback" />
                            </form>
                        </div>
                    </dialog>
                </td>
            </tr>
        </>
    );
};

export default MyClassRow;