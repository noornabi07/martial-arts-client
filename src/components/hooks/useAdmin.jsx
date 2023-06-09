import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () =>{
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const {data: isAdmin, isLoading: isAdminLoadin} = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/allusers/admin/${user?.email}`)
            console.log('is Admin response', res);
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoadin]
}

export default useAdmin;