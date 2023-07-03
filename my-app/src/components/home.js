import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './home.css';

function Home() {

    const [ highlighted, setHighlighted ] = useState(-1);
    const [ clicked, setClicked ] = useState(-1)
    
    const highlightRate = high => evt => {
        setHighlighted(high);
    }

    const rateClicked = rate => evt => {
        setClicked(rate + 1);
    }

    

    return (
        <React.Fragment>
            <div className="Home">
                <div className="Rating">
                    <h5>Rating:</h5>
                    <FontAwesomeIcon icon={faStar} className={clicked > 0 ? 'orange':''}/>
                    <FontAwesomeIcon icon={faStar} className={clicked > 1 ? 'orange':''}/>
                    <FontAwesomeIcon icon={faStar} className={clicked > 2 ? 'orange':''}/>
                    <FontAwesomeIcon icon={faStar} className={clicked > 3 ? 'orange':''}/>
                <FontAwesomeIcon icon={faStar} className={clicked > 4 ? 'orange':''}/>
                    <div className="rate-container">
                    {
                        [...Array(5)].map( (e, i)=> {
                            return <FontAwesomeIcon key={i} icon={faStar} className={highlighted > i - 1 ? 'purple':''}
                            onMouseEnter={highlightRate(i)}
                            onMouseLeave={highlightRate(-1)}
                            onClick={rateClicked(i)}
                        />
                        }) 
                    }
                </div>
                </div>
                <h5>Price</h5>
                <h5>Distance</h5>
                <h5>Type</h5>
             </div>
             <div className="d-flex justify-content-center align-items-center">
                <button className="btn btn-primary btn-lg">generate random restaurant</button>
            </div>
        </React.Fragment>
    )

}


export default Home;