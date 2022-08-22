import React from 'react';
import './Body.css'
import Header from './Header'

function Body({spotify}) {
    return (
        <div className="body">
            <Header spotify={spotify} />

            <div className="body__info">
                <img src="https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/8PtZiVP0nL008X12wn646TW6A_h6WDiUdWvgHU6uhYcQrEXDWLFqWPqrlW_PyW1TL_2WiNDEjeb9A85-9xDZsDUF73W6tyd7Pl1vLUzqy04=/MjM6ODU6MDBUNzItNjAtMg==" alt=""/>
                <div className="body__infoText">
                    <strong> PLAYLIST </strong>
                    <h2> Discover Weekly </h2>
                    <p> description .... </p>

                </div>
            </div>
        </div>
    );
}

export default Body;