import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAllResult = () => {
    const{user , loading} = useAuth();
    const[axiosSecure] = useAxiosSecure();

    const{data: usersResult =[] ,refetch}=useQuery({
        queryKey:["users-result"],
        enabled: !loading && !!user?.email,
        queryFn: async()=>{
            const res = await axiosSecure.get("/all-test-result")
            return res.data;
        }
    })
    return [usersResult , refetch]
};

export default useAllResult;