import React from 'react';

function UserReviewForm() {
    return (
        <form className='container'>
            <div className='field'>
                <label className='label'>Review Title:</label>
                <div className='control'>
                    <input className='input is-small' type='text' name='reviewTitle' id='rewiewTitle'></input>
                </div>
            </div>
            <div className='field'>
                <label className='label'>Review  Body:</label>
                <div className='control'>
                    <textarea className='textarea is-small'  type='text' name='reviewBody' id='reviewBody' rows='5'></textarea>
                </div>
            </div>
            <div className='field flex-row'>
                <div>
                    <label className='label'>Rating</label>
                    <div className='control'>
                        <div className='select is-small'>
                            <select className='flex-center'>
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
                    <button type='submit' className='button is-info is-light is-small'>Submit</button>
                </div>
            </div>
        </form>
    )
};

export default UserReviewForm;