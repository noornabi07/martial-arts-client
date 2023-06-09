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
                                <li><Link to="/"><FaHome></FaHome> Admin Home</Link></li>
                                <li><Link to="/dashboard/classHistory"><MdClass></MdClass>Manage All Classes</Link></li>
                                 <li><Link to="/dashboard/allusers"><FaUsers></FaUsers> Manage All Users</Link></li>
                             </> ) ||  isInstructor && <>
                                    <li><Link><FaHome></FaHome> Instructor Home</Link></li>
                                    <li><Link to="/dashboard/addclass"><MdClass></MdClass>Add Class</Link></li>
                                    <li><Link to="/dashboard/myclasses"><BsBookmarkFill></BsBookmarkFill> My Classes</Link></li>
                                    <li><Link to="/dashboard/enrolledStudents"><MdWorkHistory></MdWorkHistory> Total Enrolled Students</Link></li>
                                    <li><Link to="/dashboard/feedback"><MdWorkHistory></MdWorkHistory> Feedback</Link></li>
                                    </> || <>
                                    <li><Link to="/"><FaHome></FaHome> User Home</Link></li>
                                    <li><Link to="/dashboard/myclass"><MdClass></MdClass>My select Class</Link></li>
                                    <li><Link to="/dashboard/enrolledClass"><BsBookmarkFill></BsBookmarkFill> Enrolled Class</Link></li>
                                    <li><Link to="/dashboard/paymentHistory"><MdWorkHistory></MdWorkHistory> Payment History</Link></li>
                                    </>
                        }

                                    {/* Sidebar content here */}

                                    <div className="divider"></div>
                                    <li><Link to="/"><FaHome></FaHome>Home</Link></li>
                                </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;