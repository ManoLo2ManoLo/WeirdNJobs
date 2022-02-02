import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'

import { useMutation } from '@apollo/client';
import { ADD_ORDER } from '../utils/mutations';


function Success(props) {
    const { serviceId: id } = useParams();
    const [addOrder] = useMutation(ADD_ORDER); 
    const services = id;

    useEffect(() => {
        async function saveOrder() { 
            await addOrder({ variables: { services }});

            setTimeout(() => {
                window.location.assign('/');
            }, 3000);
        }

        saveOrder()
    }, [addOrder])


    return (
      <div>
          <h1>Success!</h1>
          <h2>
            Thank you for your purchase!
          </h2>
          <h2>
            You will now be redirected to the homepage
          </h2>
      </div>
    );
  };

export default Success;