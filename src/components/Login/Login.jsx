import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../assets/martial-login-register-img.png'
import eye from '../../assets/eye logo.png'
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';


const Login = () => {
    const [error, setError] = useState('')
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eye)
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleToggle = () => {
        if (type === 'password') {
            setType('text')
            setIcon(eye)
        } else {
            setType('password')
            setIcon(eye)
        }
    }


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Your login has success',
                    showConfirmButton: false,
                    timer: 1500
                })
                setError('')
                navigate('/')
            })
            .catch(error => {
                setError(error.message);
            })
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-400 rounded-xl">
                <div className="hero-content  flex-col lg:flex-row">

                    <div className="mr-20 w-1/2">
                        <img src={img} alt="" />
                    </div>

                    <div className="card flex-shrink-0 mt-10 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl font-bold text-center text-red-600">Login now!</h1>

                            <p className='text-2xl text-center font-semibold text-orange-400'>{error}</p>

                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Password</span>
                                    </label>

                                    <div className='flex relative'>
                                        <input type={type} id='password' name='password' placeholder="password" className="input input-bordered w-full" />
                                        <img onClick={handleToggle} className='w-8 absolute right-3 top-4' id='icon-pass' src={icon} alt="" />
                                    </div>

                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover font-bold text-red-600">Forgot password?</a>
                                    </label>
                                </div>

                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Login" />
                                </div>

                            </form>

                            <div className='text-center'>
                                <SocialLogin></SocialLogin>
                            </div>

                            <p className='text-center mt-5 font-semibold text-orange-500'>Don't Have An Account? <Link to="/register" className='text-lime-700 underline'>Register</Link></p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;