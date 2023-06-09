import { useContext } from "react"
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useInstructor = () =>{
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey: ['instructor', user?.email],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/allusers/instructor/${user?.email}`)
            return res.data.instructor;
        }
    })
    return [isInstructor, isInstructorLoading]
}

export default useInstructor;