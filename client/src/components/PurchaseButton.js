import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../utils/queries';
import Auth from '../utils/auth';

const stripeURL = process.env.STRIPE_URL || 'pk_test_TYooMQauvdEDq54NiTphI7jx'
const stripePromise = loadStripe(`${stripeURL}`);

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

    function showPurchaseButton() {
        if (Auth.loggedIn()) {
            return (
                <button className='box button button-color' onClick={submitCheckout}>
                    Purchase
                </button>
            )
        }
    }

    return (
        <div>{showPurchaseButton()}</div>
    )
}

export default PurchaseButton;