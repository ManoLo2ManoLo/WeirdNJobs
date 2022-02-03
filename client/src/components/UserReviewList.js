import React from 'react';

function UserReviewList(props) {
    const reviews = props.dataFromParent || [];

    return (
        <div>
            <h1 className='title is-1'>Reviews</h1>

            {reviews.map(review => (
                <div className='card my-4'>
                    <header className='card-header footer-head'>
                        <a href={`/profile/${review.username}`}><p className='card-header-title width30'>@{review.username}</p></a>
                        <p className='card-header-title width30 is-underlined'>{review.reviewTitle}</p>
                    </header>
                    <div className='card-content footer-content'>
                        <div className='content footer-content'>
                            {review.reviewBody}
                        </div>
                    </div>
                    <footer className='flex-row'>
                        <p className='card-footer-item width30 is-italic'>{review.rating} out of 5</p>
                    </footer>
                </div>
            ))}
        </div>
    )
}

 export default UserReviewList;