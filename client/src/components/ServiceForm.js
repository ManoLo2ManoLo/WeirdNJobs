import React from 'react';

function ServiceForm() {
    return (
        <div className='container'>
            <form>
                <div className='field'>
                    <label className='label'>Service Title:</label>
                    <div className='control'>
                        <input className='input is-small' type='text' name='serviceTitle' id='serviceTitle'></input>
                    </div>
                </div>
                <div className='field'>
                    <label className='label'>Service Body:</label>
                    <div className='control'>
                        <textarea className='textarea is-small' type='text' name='serviceBody' id='serviceBody' rows='5'></textarea>
                    </div>
                </div>
                <div className='flex-row'>
                    <div className='field'>
                        <label className='label'>Consulation Fee</label>
                        <div className='control'>
                            <input className='input is-small' type='number' name='fee' id='fee'></input>
                        </div>
                    </div>
                    <div className='buttons'>
                        <button type='submit' className='button is-info is-light is-small'>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default ServiceForm;