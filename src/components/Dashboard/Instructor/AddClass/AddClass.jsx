import React, { useContext } from 'react';
import SectionTitle from '../../../SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../../Provider/AuthProvider/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';


const image_hosting_token = import.meta.env.VITE_Image_upload_token;

const AddClass = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`

    const onSubmit = data => {
        console.log(data);
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, instructor, email, price, seats } = data;
                    const newClass = { name, instructor, student: 0, email, price: parseFloat(price), seats: parseFloat(seats), image: imgURL, status: 'pending' }
                   

                    axiosSecure.post('/classes', newClass)
                    .then(data => {
                        console.log('after add class', data.data);
                        if(data.data.insertedId){
                            reset();
                            Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: 'Your Class Added Successfull',
                                showConfirmButton: false,
                                timer: 1500
                              })
                        }
                    })
                }
            })
    }

    return (
        <div>
            <SectionTitle heading="Add Your Class" subheading="Class Show Now"></SectionTitle>
            <div className='w-full px-20'>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Name*</span>
                        </label>
                        <input type="text" readOnly defaultValue={user?.displayName} placeholder="Instructor Name" {...register("instructor", { required: true, maxLength: 120 })} className="input input-bordered w-full " />
                    </div>
                    <div className='flex gap-4 my-4'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Instructor Email*</span>
                            </label>
                            <input type="email" readOnly defaultValue={user?.email} placeholder="Instructors Email" {...register("email", { required: true, maxLength: 120 })} className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full ml-4 ">
                            <label className="label">
                                <span className="label-text font-semibold">Price*</span>
                            </label>
                            <input type="number"  {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className='flex gap-4 my-4'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Class Name*</span>
                            </label>
                            <input type="text" placeholder="Class Name" {...register("name", { required: true, maxLength: 120 })} className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Available Seats*</span>
                            </label>
                            <input type="number" placeholder="Seats" {...register("seats", { required: true, maxLength: 120 })} className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className="form-control w-full my-4 ">
                        <label className="label">
                            <span className="label-text font-semibold">Class Image</span>
                        </label>
                        <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full " />
                    </div>
                    <input type="submit" className='btn btn-primary my-4 w-full' value="Add Class" />
                </form>

            </div>
        </div>
    );
};

export default AddClass;