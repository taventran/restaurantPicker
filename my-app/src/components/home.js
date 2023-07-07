import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faDollar } from '@fortawesome/free-solid-svg-icons';
import foodOptions from './foodTypes.js'
import RestaurantList from './yelpAPI.js';
import './home.css';

function Home() {

    const [ rateHighlighted, setRateHighlighted ] = useState(-1);
    const [ ratingClicked, setRatingClicked ] = useState(-1);
    const [ showEditRating, setShowEditRating ] = useState(true);
    
    const highlightRate = high => evt => {
        setRateHighlighted(high);
    }

    const rateClicked = rate => evt => {
        setRatingClicked(rate + 1);
        enableEditRating();
    }

    function enableEditRating() {
        if (showEditRating === false) {
            setShowEditRating(true)
        }
        else {
            setShowEditRating(false)
        }
    }

    const [ dollarHighlighted, setDollarHighlighted ] = useState(-1);
    const [ dollarSignClicked, setDollarClicked ] = useState(-1);
    const [ showEditDollar, setShowEditDollar ] = useState(true);

    const highlightDollar = high => evt => {
        setDollarHighlighted(high);
    }

    const dollarClicked = rate => evt => {
        setDollarClicked(rate + 1);
        enableEditDollarSign();
    }

    function enableEditDollarSign() {
        if (showEditDollar === false) {
            setShowEditDollar(true)
        }
        else {
            setShowEditDollar(false)
        }
    }

    const [sliderValue, setSliderValue] = useState(0);

    const handleSliderChange = (event) => {
      const value = parseInt(event.target.value);
      setSliderValue(value);
    };

    const options = foodOptions;
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    }; 

    return (
        <React.Fragment>
            <div className="Home">
                <div className="Rating">
                    <h5>Rating:</h5>
                    {showEditRating === true &&
                        /* Editing restaurant rating criteria */
                        <div className="rate-container">
                        {
                            [...Array(5)].map( (e, i)=> {
                                return <FontAwesomeIcon key={i} icon={faStar} className={rateHighlighted > i - 1 ? 'orange':''}
                                onMouseEnter={highlightRate(i)}
                                onMouseLeave={highlightRate(-1)}
                                onClick={rateClicked(i)}
                            />
                            }) 
                        }
                        </div>
                    }
                    {showEditRating === false &&
                        /* Show minimum rating requirement */
                        <div>
                            <FontAwesomeIcon icon={faStar} className={ratingClicked > 0 ? 'orange':''}/>
                            <FontAwesomeIcon icon={faStar} className={ratingClicked > 1 ? 'orange':''}/>
                            <FontAwesomeIcon icon={faStar} className={ratingClicked > 2 ? 'orange':''}/>
                            <FontAwesomeIcon icon={faStar} className={ratingClicked > 3 ? 'orange':''}/>
                            <FontAwesomeIcon icon={faStar} className={ratingClicked > 4 ? 'orange':''}/>
                            <FontAwesomeIcon icon={faEdit} className="edit-icon" onClick={enableEditRating}/>
                        </div>
                    }
                </div>
                <div className="Price">
                    <h5>Price:</h5>
                    {showEditDollar === true &&
                        /* Editing max dollar range criteria */
                    <div className="dollar-container">
                        {
                            [...Array(4)].map( (e, i)=> {
                                return <FontAwesomeIcon key={i} icon={faDollar} className={dollarHighlighted > i - 1 ? 'green':''}
                                onMouseEnter={highlightDollar(i)}
                                onMouseLeave={highlightDollar(-1)}
                                onClick={dollarClicked(i)}
                            />
                            }) 
                        }
                    </div>
                    }
                    {showEditDollar === false &&
                        /* Show max dollar range requirement */
                        <div>
                            <FontAwesomeIcon icon={faDollar} className={dollarSignClicked > 0 ? 'green':''}/>
                            <FontAwesomeIcon icon={faDollar} className={dollarSignClicked > 1 ? 'green':''}/>
                            <FontAwesomeIcon icon={faDollar} className={dollarSignClicked > 2 ? 'green':''}/>
                            <FontAwesomeIcon icon={faDollar} className={dollarSignClicked > 3 ? 'green':''}/>
                            <FontAwesomeIcon icon={faEdit} className="edit-icon" onClick={enableEditDollarSign}/>
                        </div>
                    }
                </div>
                <h5>Distance: {sliderValue} miles </h5>
                {/* Setting the max distance possible */}
                <input type="range" class="form-range" min="0" max="100" step="5" 
                    id="customRange1"  onChange={handleSliderChange}/>
                <h5>Type:</h5>
                <select value={selectedOption} onChange={handleOptionChange}
                    className="form-select" aria-label="Select Option">
                    <option value=""></option>
                        {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                    ))}
                </select>
             </div>
             <div className="d-flex justify-content-center align-items-center">
                <button className="btn btn-primary btn-lg">generate random restaurant</button>
            </div>
        </React.Fragment>
    )

}


export default Home;