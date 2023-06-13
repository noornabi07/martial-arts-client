import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import img from '../../assets/martial-login-register-img.png'
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const [error, setError] = useState('')
    const { register, handleSubmit, reset,watch, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const password = watch("password")

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const newUser = result.user;
                console.log("current user", newUser)

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email, image: data.photoURL }
                        fetch('https://martial-arts-server-noornabi07.vercel.app/allusers', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-center',
                                        icon: 'success',
                                        title: 'Create Your Account Success',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate('/')
                                }
                            })
                    })
                    .catch(error => {
                        setError(error.message)
                    })

            })
            .catch(error => {
                setError(error.message);
            })
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-400 rounded-xl">
                <div className="hero-content mt-20 flex-col lg:flex-row">

                    <div className="mr-20 w-1/2">
                        <img src={img} alt="" />
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl font-bold text-center text-lime-600">Please Registration</h1>
                            <p className='text-2xl text-center font-semibold text-orange-400'>{error}</p>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* name field */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} name='name' placeholder="Name" className="input input-bordered" />
                                    {errors.name && <span className='text-red-500'>Name is required</span>}
                                </div>

                                {/* photo field */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Photo URL</span>
                                    </label>
                                    <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                    {errors.photoURL &&
                                        <span className='text-red-500'>Photo is required</span>
                                    }
                                </div>

                                {/* email field */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className='text-red-500'>Email is required</span>}
                                </div>

                                {/* password field */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Password</span>
                                    </label>
                                    <input type="password" {...register("password",
                                        {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 12,
                                        })} name='password' placeholder="password" className="input input-bordered" />

                                    {errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>}

                                    {errors.password?.type === 'minLength' && <p className='text-red-500'>Password add at least 6 character</p>}

                                </div>

                                {/* confirm password */}

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="confirm">
                                        Confirm Password
                                    </label>
                                    <input
                                        className="border-2 border-[#C5C5C5] py-2 px-3 w-full rounded-lg mt-2"
                                        type="password"
                                        {...register("confirm", {
                                            required: "Confirm Password is required",
                                            validate: (value) =>
                                                value === password || "Passwords do not match",
                                        })}
                                        id=""
                                        placeholder="Confirm Password"
                                    />
                                    {errors.confirm && (
                                        <p className="text-sm text-red-500">{errors.confirm.message}</p>
                                    )}
                                </div>

                                {/* <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Confirm Password</span>
                                    </label>
                                    <input type="password" {...register("passwordConfirm",
                                        {
                                            required: true,
                                            minLength: 6,
                                        })} name='passwordConfirm' placeholder="confirm password" className="input input-bordered" />

                                    {errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>}

                                    {errors.password?.type === 'minLength' && <p className='text-red-500'>Password add at least 6 character</p>}

                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover font-bold text-red-600">Forgot password?</a>
                                    </label>
                                </div> */}

                                {/* submit button */}
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Register" />
                                </div>

                            </form>

                            <div className='text-center'>
                                <SocialLogin></SocialLogin>
                            </div>
                            <p className='text-center mt-5 font-semibold text-orange-500'>Have An Account? <Link to="/login" className='text-lime-700 underline'>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;