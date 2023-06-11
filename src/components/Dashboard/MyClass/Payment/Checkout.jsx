import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const Checkout = ({ price, id, selectClassId }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState("");
    useEffect(() => {
        if (price > 0) {
            axiosSecure.post("/create-payment-intent", { price }).then((res) => {
                // console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            });
        }
    }, [price, axiosSecure]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        if (error) {
            console.log("error", error);
            setCardError(error.message);
        } else {
            setCardError("");
            // console.log('payment method', paymentMethod)
        }

        setProcessing(true);

        const { paymentIntent, error: confirmError } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || "unknown",
                        name: user?.displayName || "anonymous",
                    },
                },
            });

        if (confirmError) {
            console.log(confirmError);
        }

        console.log("payment intent", paymentIntent);
        setProcessing(false);
        if (paymentIntent.status === "succeeded") {
            setTransactionId(paymentIntent.id);
            // save payment information to the server
            const payment = {
                id,
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                status: "service pending",
            };

            axiosSecure.post("/payments", payment).then((res) => {
                console.log(res.data);
                fetch(`http://localhost:5000/all-classes/seats/${selectClassId}`, {
                    method: "PATCH",
                })
                    .then((res) => res.json())
                    .then((data) => { });

                if (res.data.insertResult.insertedId) {
                    // display confirm
                }
                if (res.data.deleteResult.deletedCount > 0) {
                    // display confirm
                }
            });
        }
    };
    return (
        <div className='mb-20'>
            {cardError && <p className='text-red-600 ml-8'>{cardError}</p>}
            {transactionId && (
                <p className='text-green-500'>
                    Transaction complete with transactionId: {transactionId}
                </p>
            )}
            <form onSubmit={handleSubmit} className='w-2/3 m-5 border-2 border-purple-600 p-6 mx-auto rounded-lg'>
                <div className='border py-2 px-4'>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: "16px",
                                    color: "#424770",
                                    "::placeholder": {
                                        color: "#aab7c4",
                                    },
                                },
                                invalid: {
                                    color: "#9e2146",
                                },
                            },
                        }}
                    />
                </div>
                <button type='submit' disabled={!stripe} className="btn btn-block btn-primary font-bold text-white  mt-8">
                    Payment
                </button>
            </form>
        </div>
    );
};

export default Checkout;






// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import React, { useState } from 'react';

// const Checkout = () => {
//     const stripe = useStripe();
//     const elements = useElements();
//     const [cardError, setCardError] = useState('')

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         if (!stripe || !elements) {
//             return
//         }

//         const card = elements.getElement(CardElement);
//         if (card === null) {
//             return
//         }

//         const { error, paymentMethod } = await stripe.createPaymentMethod({
//             type: 'card',
//             card
//         })

//         if (error) {
//             console.log('error', error)
//             setCardError(error.message)
//         } else {
//             setCardError('')
//             // console.log('payment method', paymentMethod)
//         }
//     }

//     return (
//         <div>

//             {cardError && <p className='text-red-400 text-xl text-center my-4'>{cardError}</p>}
//             {/* {transactionId && <p className='text-green-500 text-xl my-4'>Transaction Completed ID: <span className='text-purple-500'>{transactionId}</span></p>} */}

//             <form onSubmit={handleSubmit} className='w-2/3 m-5 rounded-lg border-2 border-purple-800 px-4 py-8 mx-auto'>
//                 <div className='border p-2'>
//                     <CardElement
//                         options={{
//                             style: {
//                                 base: {
//                                     fontSize: '16px',
//                                     color: '#424770',
//                                     '::placeholder': {
//                                         color: '#aab7c4',
//                                     },
//                                 },
//                                 invalid: {
//                                     color: '#9e2146',
//                                 },
//                             },
//                         }}
//                     />
//                 </div>
//                 <button type="submit" disabled={!stripe} className="btn btn-block btn-primary  mt-8 font-bold text-white">
//                     Payment
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Checkout;