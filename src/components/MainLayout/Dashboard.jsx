import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { MdClass, MdWorkHistory } from 'react-icons/Md';
import { BsBookmarkFill } from 'react-icons/Bs';

const Dashboard = () => {

    // TODO: 
    const isAdmin = true;
    const isInstructor = true;

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* { */}
                            {/* // isAdmin ? <> */}
                                 {/* admin all path */}
                            {/* //     <li><Link><FaHome></FaHome> Admin Home</Link></li> */}
                            {/* //     <li><Link to="/dashboard/history"><MdClass></MdClass>Manage Classes</Link></li> */}
                            {/* //     <li><Link to="/dashboard/allusers"><BsBookmarkFill></BsBookmarkFill> Manage Users</Link></li> */}
                            {/* </>
                                : isInstructor ? <>
                                    <li><Link><FaHome></FaHome> Instructor Home</Link></li>
                                    <li><Link to="/dashboard/myclass"><MdClass></MdClass>My Classes</Link></li>
                                    <li><Link><BsBookmarkFill></BsBookmarkFill> Enrolled Students</Link></li>
                                    <li><Link><MdWorkHistory></MdWorkHistory> Payment History</Link></li> */}
                                {/* </> : <> */}
                                    <li><Link><FaHome></FaHome> User Home</Link></li>
                                    <li><Link to="/dashboard/myclass"><MdClass></MdClass>My Class</Link></li>
                                    <li><Link><BsBookmarkFill></BsBookmarkFill> Enrolled Class</Link></li>
                                    <li><Link><MdWorkHistory></MdWorkHistory> Payment History</Link></li>
                                {/* </> */}
                        {/* } */}
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