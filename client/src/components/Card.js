import React from 'react';

import { useQuery } from '@apollo/client';
import {  QUERY_ALL_SERVICES } from '../utils/queries';

function Card() {
    const { data } = useQuery(QUERY_ALL_SERVICES);
    
    return (
        <div className='container'>
            {data?.allservices.map(service => (
                <div className='card my-4'>
                    <header className='card-header'>
                        <a href={`/profile/${service.username}`}><p className='card-header-title width30'>@{service.username}</p></a>
                        <p className='card-header-title width30'>{service.serviceTitle}</p>
                    </header>
                    <div className='card-content'>
                        <div className='content'>
                            {service.serviceBody}
                        </div>
                    </div>
                    <footer className='flex-row'>
                        <p className='card-footer-item width30'>Consultation Fee: ${service.fee}</p>
                        <p className='card-footer-item width30'>{service.createdAt}</p>
                    </footer>
                    <div className='card-content'>
                        <button className='content'>
                            <a href={`/service/${service._id}`}>View {service.reviewCount} review(s)</a>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Card;