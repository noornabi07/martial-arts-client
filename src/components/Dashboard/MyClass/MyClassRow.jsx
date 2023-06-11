import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyClassRow = ({ singleClass, index, handleDelete }) => {
    const { name, instructor, image, price, seats, email, _id } = singleClass;

    return (

        <tr>
            <td className='text-xl font-semibold'>{index + 1}</td>
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
            <td>${price}</td>
            <td>
                <Link to={`/dashboard/payment/${_id}`}>
                    <button className="btn btn-sm bg-pink-500 text-white font-semibold">Payment</button>
                </Link>
            </td>

            <td>
                <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs text-red-500 text-xl"><FaTrashAlt></FaTrashAlt>
                </button>
            </td>

        </tr>
    );
};

export default MyClassRow;