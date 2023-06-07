import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/martial nav logo.png'
const Navbar = () => {

    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/instructors">Instructors</Link></li>
        <li><Link to="/classes">Classes</Link></li>
        <li><Link to="/deshboard">Dashboard</Link></li>

    </>


    return (
        <>
            <div className="navbar  bg-opacity-30 max-w-screen-xl mx-auto  bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <div className='flex'>
                        <img className='w-14' src={logo} alt="" />
                        <a className="btn btn-ghost normal-case text-xl">Martial Arts</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">


                    <div className="avatar">
                        <div className="w-10 mr-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img className="tooltip tooltip-bottom" data-tip="" src="" />
                        </div>
                    </div>


                    <li className='btn'>
                        <Link to="/login">Login</Link>
                    </li>

                </div>
            </div>
        </>
    );
};

export default Navbar;