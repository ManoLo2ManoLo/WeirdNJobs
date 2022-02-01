import React from 'react';

import { Redirect, useParams } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { QUERY_USER, GET_ME } from "../utils/queries";

import Auth from"../utils/auth";

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
            <div className="flex-row mb-3">
            <h2 className="bg-dark text-secondary p-3 display-inline-block">
                Viewing {userParam ? `${user.username}'s` : "your"} profile.
            </h2>
        </div>
    )
};

export default Profile;