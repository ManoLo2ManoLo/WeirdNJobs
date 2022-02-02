import React from 'react';
import { useQuery, useSubscription } from '@apollo/client';
import { GET_ME } from "../utils/queries";

function MyOrder() {
    const {  data } = useQuery( GET_ME )
    const user = data?.me

    return (
        <>
            <div>
                <h1>Order History</h1>
            </div>
            {user?.orders.map(order => (
                <div className='card my-4'>
                    <div className='card-header footer-head'>
                        <h2>Purchased on: {user?.orders[0].purchaseDate}</h2>
                    </div>
                    <header className='card-header footer-head'>
                        <a href={`/profile/${order.services[0].username}`}><p className='card-header-title width30'>@{order.services[0].username}</p></a>
                        <p className='card-header-title width30 is-underlined'>{order.services[0].serviceTitle}</p>
                    </header>
                
                    <div className='card-content footer-content'>
                        <div className='content footer-content'>
                            {order.services[0].serviceBody}
                        </div>
                    </div>

                    <footer className='flex-row'>
                        <p className='card-footer-item width30 is-italic'>You Paid: ${order.services[0].fee}</p>
                        <p className='card-footer-item width30 is-italic'>Service Poster On: {order.services[0].createdAt}</p>
                    </footer>
                </div>
          
            ))}
         
        </>
    )
}

export default MyOrder;