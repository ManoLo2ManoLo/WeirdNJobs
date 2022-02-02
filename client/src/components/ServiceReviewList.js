import React from 'react';
import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_SERVICE } from '../utils/queries';

function ServiceReviewList() {
    const { serviceId: id } = useParams();

    const { data } = useQuery(QUERY_SERVICE, {
        variables: { id: id}
    })

    const service = data?.service;

    return (
        <div>
            <h1>Reviews</h1>
            {service?.reviews.map(review => (
                <div className='card my-4'>
                    <header className='card-header footer-head'>
                        <a href={`/profile/${review.username}`}><p className='card-header-title width30'>@{review.username}</p></a>
                        <p className='card-header-title width30 is-underlined'>{review.reviewTitle}</p>
                    </header>
                    <div className='card-content footer-content'>
                        <div className='content footer-content'>
                            {review.reviewBody}
                        </div>
                    </div>
                    <footer className='flex-row'>
                        <p className='card-footer-item width30 is-italic'>{review.rating} out of 5</p>
                        <p className='card-footer-item width30 is-italic'>{service.createdAt}</p>
                    </footer>
                </div>
            ))}
        </div>
    )
}

export default ServiceReviewList;