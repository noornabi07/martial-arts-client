import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaHome, FaUsers } from 'react-icons/fa';
import { MdClass, MdWorkHistory } from 'react-icons/Md';
import { BsBookmarkFill } from 'react-icons/Bs';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';

const Dashboard = () => {

    // TODO: 
    // const isAdmin = true;
    // const isInstructor = true;
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ml-4 justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-orange-500 text-white">
                        {
                            isAdmin && ( <>
                                {/* admin all path */}
                                <li><Link><FaHome></FaHome> Admin Home</Link></li>
                                <li><Link to="/dashboard/classHistory"><MdClass></MdClass>Manage All Classes</Link></li>
                                 <li><Link to="/dashboard/allusers"><FaUsers></FaUsers> Manage All Users</Link></li>
                             </> ) ||  isInstructor && <>
                                    <li><Link><FaHome></FaHome> Instructor Home</Link></li>
                                    <li><Link to="/dashboard/myclass"><MdClass></MdClass>My Classes</Link></li>
                                    <li><Link><BsBookmarkFill></BsBookmarkFill> Enrolled Students</Link></li>
                                    <li><Link><MdWorkHistory></MdWorkHistory> Payment History</Link></li>
                                    </> || <>
                                    <li><Link><FaHome></FaHome> User Home</Link></li>
                                    <li><Link to="/dashboard/myclass"><MdClass></MdClass>My select Class</Link></li>
                                    <li><Link><BsBookmarkFill></BsBookmarkFill> Enrolled Class</Link></li>
                                    <li><Link><MdWorkHistory></MdWorkHistory> Payment History</Link></li>
                                    </>
                        }

                                    {/* Sidebar content here */}

                                    <div className="divider"></div>
                                    <li><Link to="/"><FaHome></FaHome>Home</Link></li>
                                    <li><Link>All Instructors</Link></li>
                                    <li><Link>All Classes</Link></li>

                                </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;