import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useLoaderData } from 'react-router-dom';
import SectionTitle from '../../../SectionTitle/SectionTitle';
import Checkout from './Checkout';


const Payment = () => {
    const selectClass = useLoaderData();
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Getway_pk)

    return (
        <div className=''>
            <SectionTitle heading="Payment Now" subheading="Please Proccess"></SectionTitle>
            
            <Elements stripe={stripePromise}>

                <Checkout
                    price={selectClass.price}
                    id={selectClass._id}
                    selectClassId={selectClass.selectClassId}
                    name={selectClass.name}
                >
                </Checkout>
            </Elements>
        </div>
    );
};

export default Payment;
