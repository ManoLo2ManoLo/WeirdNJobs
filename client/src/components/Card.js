import React from 'react';

function Card() {
    const inputStyle = {
        width : '30%'
    };

    return (
        <div className="card">
            <header className="card-header">
                <p className="card-header-title" style={inputStyle}>
                  <a href="/" style={inputStyle}>@noloC</a>  Handyman Work for light switches
                </p>
                <button className="card-header-icon" aria-label="more options">
                    <span className="icon">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </header>
            <div className="card-content">
                <div className="content">
                    Hello my name is NoloC. I'm an experienced electrician with a focus on light switches. 
                        The work I'm looking for currently is one where I come to your home, inspect the lights, 
                        once the lights are inspected, I make myself comfortable, take your alcohol and drink
                        until I get paid my money.

                        *** Alcohol Preference - Titos
                        *** Charge is 250$ per light switch and 10$ per cup of alcohol.

        
                    <a href="/" style={inputStyle}>@noloC</a>. <a href="/" style={inputStyle}>#weirdwork</a> <a href="/" style={inputStyle}>#drunk</a>
                    <br></br>
                        <time datetime="2022-1-30" style={inputStyle}>11:09 PM - 30 Jan 2022</time>
                </div>
            </div>
            <footer className="card-footer">
                <a href="#" className="card-footer-item" style={inputStyle}>Save</a>
                <a href="#" className="card-footer-item" style={inputStyle}>Purchase</a>
            </footer>
        </div>
    );
}

export default Card;