// import { useQuery } from '@tanstack/react-query'
// import { useContext } from 'react';
// import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';

// const useClasses = () =>{
//     const {user} = useContext(AuthContext);

//     const { refetch, data: selectClasses = [] } = useQuery({
//         queryKey: ['selectClass', user?.email],
//         queryFn: async() =>{
//             const res = await fetch(`http://localhost:5000/selectClass?email=${user.email}`)
//             return res.json();
//         },
//       })
//       return [refetch, selectClasses]
// }

// export default useClasses;


import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';

const useClasses = () =>{
    const {user, loading} = useContext(AuthContext)
    // const token = localStorage.getItem('access-token')

    const [axiosSecure] = useAxiosSecure()

    const {refetch, data: selectClasses = [] } = useQuery({
        queryKey: ['selectClass', user?.email],
        // enabled: !loading,

        queryFn: async () =>{
            const res = await axiosSecure(`/selectClass?email=${user.email}`);
            console.log('res from axios', res)
            return res.data;
        },

      })

      return [selectClasses, refetch]
}

export default useClasses;
