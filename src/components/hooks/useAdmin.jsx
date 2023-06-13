import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () =>{
    const {user,loading} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['admin', user?.email],
        enabled:!loading,
        queryFn: async () =>{
            const res = await axiosSecure.get(`/allusers/admin/${user?.email}`)
            // console.log('is Admin response', res);
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]
}

export default useAdmin;