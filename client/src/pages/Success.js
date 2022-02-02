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
      await addOrder({ variables: { services } });

      setTimeout(() => {
        window.location.assign('/');
      }, 3000);
    }

    saveOrder()
  }, [addOrder])


  return (
    <div>
      <div class="card box is-center">
        <header class="card-header tags">
          <p class="card-header-title tags">
            Thank you for your purchase!
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            You will now be redirected to the homepage!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;