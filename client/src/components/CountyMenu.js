import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_COUNTIES } from '../utils/queries';

function CountyMenu({ setCounty }) {
    const { data: data } = useQuery(QUERY_COUNTIES);
    const counties = data?.counties || [];

    return (
        <div className='box'>
             <h2>Choose a County:</h2>
            <div>
                <button className='button is-info is-light is-small' onClick={() => { setCounty(false)}}>View All</button>
                {counties.map((item) => (
                    <button
                        className='button is-info is-light is-small'
                        key={item.id}
                        onClick={() => {
                            setCounty(item._id);
                        }}
                    >
                        {item.name}
                    </button>
                ))

                }
            </div>
        </div>
    )
}

export default CountyMenu;