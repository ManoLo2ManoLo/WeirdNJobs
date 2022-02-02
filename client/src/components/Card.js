import React from 'react';

import { useQuery } from '@apollo/client';
import { QUERY_ALL_SERVICES } from '../utils/queries';

function Card() {
    const { data } = useQuery(QUERY_ALL_SERVICES);

    return (
        <>
            <div className='container flex-row-center'>
                {data?.allservices.map(service => (
                    <div className='card my-5 width36 mx-5 heightauto'>
                        <header className='card-header footer-head'>
                            <a href={`/profile/${service.username}`}><p className='card-header-title width30'>@{service.username}</p></a>
                            <p className='card-header-title width30 is-underlined'>{service.serviceTitle}</p>
                        </header>
                        <div className='card-content footer-content'>
                            <div className='content footer-content'>
                                {service.serviceBody}
                            </div>
                        </div>
                        <footer className='flex-row'>
                            <p className='card-footer-item width30 is-italic'>Consultation Fee: ${service.fee}</p>
                            <p className='card-footer-item width30 is-italic'>{service.createdAt}</p>
                        </footer>
                        <div className='card-content footer-head'>
                            <button className='box button button-color'>
                                <a href={`/service/${service._id}`}>View {service.reviewCount} review(s)</a>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Card;