import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useAddClasses = () =>{
    const {user, loading} = useContext(AuthContext)
   

    const [axiosSecure] = useAxiosSecure()

    const {refetch, data: addClasses = [] } = useQuery({
        queryKey: ['classes', user?.email],
        enabled: !loading,

        queryFn: async () =>{
            const res = await axiosSecure(`/classes?email=${user.email}`);
            console.log('res from axios', res)
            return res.data;
        },

      })

      return [addClasses, refetch]
}

export default useAddClasses;
