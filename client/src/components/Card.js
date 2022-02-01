import React from 'react';

function Card() {
    return (
        <div className="card">
            <header className="card-header">
                <p className="card-header-title width30">
                  <a href="/" className='width30'>@nexusC</a>  Handyman Work for uselessness
                </p>
                <button className="card-header-icon" aria-label="more options">
                    <span className="icon">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </header>
            <div className="card-content">
                <div className="content">
                    Hello my name is NexusC. I'm an experienced plumber with the a brain of a squirrel.
                    The work I'm looking for currently is one where I come to your home, do nothing,
                    once I get nothing done, I make myself comfortable, take your vape and vape
                    until I get paid my money.

                    *** Vape Preference - Nut
                    *** Charge is 250$ per nothing and 10$ per hit of vape.
                    <a href="/" className='width30'>@nexusC</a>. <a href="/" className='width30'>#weirdwork</a> <a href="/" className='width30'>#vapingLyfe</a>
                    <time datetime="2022-1-30" className='width30'>11:09 PM - 30 Jan 2022</time>
                </div>
            </div>
            <footer className="card-footer">
                <a href="#" className="card-footer-item width30">Save</a>
                <a href="#" className="card-footer-item width30">Purchase</a>
            </footer>
        </div>
    );
}

export default Card;