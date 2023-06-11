import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import PaymentHistoryCard from "./PaymentHistoryRow";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import PaymentHistoryRow from "./PaymentHistoryRow";

const PaymentHistory = () => {
    const { loading, user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { data: payments = [], error } = useQuery({
        queryKey: ['payments'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments?email=${user?.email}`);
            return res.data;
        },
    })

    return (
        <div>
            <SectionTitle heading="Pay History" subheading="Your All Payment Details"></SectionTitle>
            {/* <div className=''>
                {
                    payments.map(payment => <PaymentHistoryCard
                        key={payment._id}
                        payment={payment}>
                    </PaymentHistoryCard>)
                }
            </div> */}

            <div className="overflow-x-auto bg-gray-500 px-4 pt-4 pb-20 text-white mt-5">
                <table className="table border">
                    {/* head */}
                    <thead className="text-lime-300 text-sm">
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Product ID</th>
                            <th>Transaction ID</th>
                            <th>Date</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((payment, index)=> <PaymentHistoryRow
                                key={payment._id}
                                payment={payment}
                                index={index}
                            ></PaymentHistoryRow>)
                        }          
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default PaymentHistory;