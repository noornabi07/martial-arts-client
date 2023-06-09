import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Instructors from "../components/Instructors/Instructors";
import Classes from "../components/Classes/Classes";
import Dashboard from "../components/MainLayout/Dashboard";
import MyClass from "../components/Dashboard/MyClass/MyClass";
import Allusers from "../components/Dashboard/Allusers/Allusers";
import PrivetRoutes from "./PrivetRoutes";
import AllClasses from "../components/Dashboard/AllClasses/AllClasses";
import AdminRoutes from "./AdminRoutes";
import AddClass from "../components/Dashboard/Instructor/AddClass/AddClass";
import InstructorRoutes from "./InstructorRoutes";
import Myclasses from "../components/Dashboard/Instructor/Myclasses/Myclasses";
import EnrolledStudents from "../components/Dashboard/Instructor/EnrolledStudents/EnrolledStudents";
import Feedback from "../components/Dashboard/Instructor/Feedback/Feedback";
import EnrolledClass from "../components/Dashboard/Users/EnrolledClass/EnrolledClass";
import PaymentHistory from "../components/Dashboard/Users/PaymentHistory/PaymentHistory";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/instructors',
                element: <Instructors></Instructors>
            },
            {
                path: '/classes',
                element: <Classes></Classes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
        
    },

    // Dashboard
    {
        path: '/dashboard',
        element: <PrivetRoutes><Dashboard></Dashboard></PrivetRoutes>,
        children: [
            {
                path: 'myclass',
                element: <MyClass></MyClass>
            },
            {
                path: 'enrolledClass',
                element: <EnrolledClass></EnrolledClass>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: 'allusers',
                element: <AdminRoutes><Allusers></Allusers></AdminRoutes>
            },
            {
                path: 'classHistory',
                element: <AdminRoutes><AllClasses></AllClasses></AdminRoutes>
            },
            {
                path: 'addclass',
                element: <InstructorRoutes><AddClass></AddClass></InstructorRoutes>
            },
            {
                path: 'myclasses',
                element: <InstructorRoutes><Myclasses></Myclasses></InstructorRoutes>
            },
            {
                path: 'enrolledStudents',
                element: <InstructorRoutes><EnrolledStudents></EnrolledStudents></InstructorRoutes>
            },
            {
                path: 'feedback',
                element: <InstructorRoutes><Feedback></Feedback></InstructorRoutes>
            }
        ]
    }
])

export default router