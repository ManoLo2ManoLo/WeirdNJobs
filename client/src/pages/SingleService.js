import React from 'react';
import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_SERVICE } from '../utils/queries';
import Auth from '../utils/auth';

import ServiceReviewForm from '../components/ServiceReviewForm';
import ServiceReviewList from '../components/ServiceReviewList';
import PurchaseButton from '../components/PurchaseButton';

const SingleService = () => {
    const { serviceId: id } = useParams();

    const { data } = useQuery(QUERY_SERVICE, {
        variables: { id: id}
    })

    const service = data?.service;

    return (
        <div>
            <div className='card my-4'>
                <header className='card-header footer-head'>
                    <a href={`/profile/${service?.username}`}><p className='card-header-title width30'>@{service?.username}</p></a>
                    <p className='card-header-title width30 is-underlined'>{service?.serviceTitle}</p>
                </header>
                <div className='card-content footer-content'>
                    <div className='content footer-content'>
                        {service?.serviceBody}
                    </div>
                </div>
                <footer className='flex-row'>
                    <p className='card-footer-item width30 is-italic'>Consultation Fee: ${service?.fee}</p>
                    <p className='card-footer-item width30 is-italic'>{service?.createdAt}</p>
                </footer>
                <div className='card-content footer-head'>
                    <div className='flex-row'>
                        <button className='box button button-color'>
                            <a href={`/service/${service?._id}`}>View {service?.reviewCount} review(s)</a>
                        </button>
                        <PurchaseButton dataFromParent = {service?._id} />
                    </div>
                </div>
            </div>
            {Auth.loggedIn ? <ServiceReviewForm/>: ''}
            
            <ServiceReviewList/>
        </div>
    )
}

export default SingleService;