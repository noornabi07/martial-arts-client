import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/martial nav logo.png'
import { AuthContext } from '../../../Provider/AuthProvider/AuthProvider';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/instructors">Instructors</Link></li>
        <li><Link to="/classes">Classes</Link></li>

        {user &&
            <>
                <li><Link to="/deshboard">Dashboard</Link></li>
                <p className='text-red-500'></p>
            </>

        }

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


                { user && <div className="avatar">
                    <div className="w-10 mr-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img className="tooltip text-red-600 tooltip-left" data-tip={user && user.displayName} src={user && user.photoURL} />
                    </div>
                </div>}


                    {
                        user ? <li onClick={handleLogOut} className='btn'><Link>Log Out</Link></li>
                         : <li className='btn'><Link to="/login">Login</Link></li>
                    }

                </div>
            </div>
        </>
    );
};

export default Navbar;