import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_SERVICE } from '../utils/mutations';
import { QUERY_SERVICES, GET_ME } from '../utils/queries';
 
function ServiceForm() {
    const [ formState, setFormState ] = useState({ serviceTitle: '', serviceBody: '', fee: '' });

    const [ addService ] = useMutation(ADD_SERVICE, {
        update(cache, { data: { addService } }) {
            try {
                const { services } = cache.readQuery({ query: QUERY_SERVICES });
                
                cache.writeQuery({
                    query: QUERY_SERVICES,
                    data: { services: [ addService, ...services] }
                })
            } catch (e) {
                console.log(e);
            }

            const  me  = cache.readQuery({ query: GET_ME });
            window.location.reload();
            cache.writeQuery({
                query: GET_ME,
                data: { me: { ...me, services: [ ...me.services , addService ] } }
            });

            
        }
    });

    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            await addService({
                variables: {
                    serviceTitle: formState.serviceTitle,
                    serviceBody: formState.serviceBody,
                    fee: parseInt(formState.fee)
                }
            })
        } catch (e) {
            console.error(e);
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
          ...formState,
          [name]: value
        });
      };

    
    return (
        <form onSubmit={handleFormSubmit} className='box'>
            <div className='field'>
                <label className='label'>Service Title:</label>
                <div className='control'>
                    <input className='input is-small' type='text' name='serviceTitle' id='serviceTitle' onChange={handleChange}></input>
                </div>
            </div>
            <div className='field'>
                <label className='label'>Service Body:</label>
                <div className='control'>
                    <textarea className='textarea is-small' type='text' name='serviceBody' id='serviceBody' rows='5' onChange={handleChange}></textarea>
                </div>
            </div>
            <div className='flex-row'>
                <div className='field'>
                    <label className='label'>Consulation Fee</label>
                    <div className='control'>
                        <input className='input is-small' type='number' name='fee' id='fee' placeholder='Must be over $1' onChange={handleChange}></input>
                    </div>
                </div>
                <div className='buttons'>
                    <button type='submit' className='button is-info is-light is-small'>Submit</button>
                </div>
            </div>
        </form>
    )
};

export default ServiceForm;