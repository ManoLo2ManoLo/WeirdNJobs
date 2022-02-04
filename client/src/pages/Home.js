import React, { useState } from 'react';
import Card from '../components/Card';
import CountyMenu from '../components/CountyMenu';
import ServiceForm from'../components/ServiceForm';
import Auth from '../utils/auth';

function Home() {
    const [currentCounty, setCounty ] = useState("");

    function showServiceForm() {
        if (Auth.loggedIn()) {
            return (
                <ServiceForm/>
            )
        }
    }

    return (
        <div className='flex-row'>
            <div className='flex-column width36 my-5'>
                {showServiceForm()}
                <CountyMenu setCounty={setCounty}/>
            </div>
            <div className='width50'>
                <Card currentCounty={currentCounty}/>
            </div>
        </div>
    )
}

export default Home;