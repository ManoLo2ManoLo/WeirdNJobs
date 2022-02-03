import React, { useState } from 'react';
import Card from '../components/Card';
import CountyMenu from '../components/CountyMenu';
import ServiceForm from'../components/ServiceForm';

function Home() {
    const [currentCounty, setCounty ] = useState("");

    return (
        <div className='flex-row'>
            <div className='flex-column width36'>
                <ServiceForm/>
                <CountyMenu setCounty={setCounty}/>
            </div>
            <div className='width50'>
                <Card currentCounty={currentCounty}/>
            </div>
        </div>
    )
}

export default Home;