import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../utils/queries'

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

function PurchaseButton(props) {
    let serviceId = props.dataFromParent;
    const [getCheckOut, { data }] = useLazyQuery(QUERY_CHECKOUT);

    useEffect(() => {
        if (data) {
            stripePromise.then((res) => {
                res.redirectToCheckout({ sessionId: data.checkout.session });
            })
        }
    }, [data]);


    function submitCheckout() {
        const serviceIds = [serviceId]

        getCheckOut({
            variables: { services: serviceIds}
        })
    }

    return (
        <button className='box button button-color' onClick={submitCheckout}>
            Purchase
        </button>
    )
}

export default PurchaseButton;