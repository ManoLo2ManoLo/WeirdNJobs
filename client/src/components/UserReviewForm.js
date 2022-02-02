import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER_REVIEW } from '../utils/mutations';

function UserReviewForm() {
    const [ formState, setFormState ] = useState({reviewTitle: '', reviewBody: '', rating: ''});
    // const { usernameId:id} = useParams();
    // const usernameId=id;

    const [ addUserReview ] = useMutation(ADD_USER_REVIEW);

    // UPDATES FORMSTATE ON SELECT
    const giveRatingANumber = (event) => {
        let { value } = event.target;
        value = parseInt(value);
        
        formState.rating = value;
    }


    

     // UPDATES FORMSTATE ON INPUT BOXES
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormState({
            ...formState,
            [name]: value
        })
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            await addUserReview({
                variables: {
                    // reviewId,
                    reviewTitle: formState.reviewTitle,
                    reviewBody: formState.reviewBody,
                    rating: formState.rating
                }
            })

            window.location.reload()
        } catch (e) {
            console.log(e)
        }
    }

    
    return (
        < form className='container'>
            <div className='field'>
                <label className='label'>Review Title:</label>
                <div className='control'>
                    <input className='input is-small' type='text' name='reviewTitle' id='rewiewTitle' onChange={handleChange}></input>
                </div>
            </div>
            <div className='field'>
                <label className='label'>Review  Body:</label>
                <div className='control'>
                    <textarea className='textarea is-small'  type='text' name='reviewBody' id='reviewBody' rows='5' onChange={handleChange}></textarea>
                </div>
            </div>
            <div className='field flex-row'>
                <div>
                    <label className='label'>Rating</label>
                    <div className='control'>
                        <div className='select is-small'>
                            <select className='flex-center' onChange={giveRatingANumber}>
                                <option></option>
                                <option value = '5'>5 - Very Good</option>
                                <option value = '4'>4 - Good</option>
                                <option value = '3'>3 - OK</option>
                                <option value = '2'>2 - Poor</option>
                                <option value = '1'>1 - Very Poor</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='buttons flex-center'>
                    <button type='submit' className='button is-info is-light is-small' onChange={handleFormSubmit}>Submit</button>
                </div>
            </div>
        </form>
    )
}
   
export default UserReviewForm;