import React from 'react';

import profile from '../assets/images/default.png';

import { Redirect, useParams } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { QUERY_USER, GET_ME } from "../utils/queries";

import Auth from"../utils/auth";

import ServiceForm from '../components/ServiceForm';
import UserReviewForm from '../components/UserReviewForm';
import PurchaseButton from '../components/PurchaseButton';
import UserReviewList from '../components/UserReviewList';

const Profile = () => {
    const { username: userParam } = useParams();

    const { loading, data } = useQuery(userParam ? QUERY_USER : GET_ME, {
        variables: { username: userParam }
    })

    const user = data?.me || data?.user || {};

    if (loading) {
        return <div>Loading...</div>;
    };

    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
        return <Redirect to="/profile" />;
    };

    if(!Auth.loggedIn()) {
        return (
            <h4>
                You need to be logged in to view this page. Use link above to Signup or log in!
            </h4>
        )
    }

    return (
        <div className='container'>
            <div className='flex-row-even'>
                <div className='width50'>
                    <div className='box width36 tags'>
                        <h1>{user.firstName} {user.lastName}</h1>
                        <h2 className='has-text-weight-bold mx-2'>@{user.username}</h2>
                    </div>

                    <div>
                        <img src={profile} className='image-shadow size-change' alt='profile'/>
                    </div>
                    <div className='box width36 tags has-text-weight-bold is-underlined'>
                        <p>{user.county} County</p>
                    </div>
                    <div className='box width36 tags is-italic'>
                        <p>If you have any questions, please email me at <a href={`mailto: ${user.email}`}>{user.email}</a></p>
                    </div>

                    <div className='box width36 tags is-italic'>
                        <UserReviewList dataFromParent = {user.reviews}/>
                    </div>
                    
                </div>
                <div className='width50'>
                    {userParam ? <UserReviewForm/>: <ServiceForm/> }

                    {/* Start of service card */}

                    {user.services.map(service => (
                        <div className='card my-4'>
                            <header className='card-header footer-head'>
                                <p className='card-header-title width30'>@{user.username}</p>
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
                                <div className='flex-row'>
                                    <button className='box button button-color'>
                                        <a href={`/service/${service._id}`}>View {service.reviewCount} review(s)</a>
                                    </button>
                                    <PurchaseButton dataFromParent = {service._id} />
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* End of service card  */}
                </div>
            </div>
        </div>
    )
};

export default Profile;