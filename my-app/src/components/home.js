import React from 'react';
import './home.css';

function Home() {

    return (
        <React.Fragment>
            <div className="Home">
                <h5>Type</h5>
                <h5>Price</h5>
                <h5>Rating</h5>
             </div>
             <div className="d-flex justify-content-center align-items-center">
                <button className="btn btn-primary btn-lg">generate random restaurant</button>
            </div>
        </React.Fragment>
    )

}


export default Home;