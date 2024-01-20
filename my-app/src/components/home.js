import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faDollar } from '@fortawesome/free-solid-svg-icons';
import foodOptions from './foodTypes.js'
// import RestaurantList from './yelpAPI.js';
import './home.css';

function Home() {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          error => {
            console.error(error);
          }
        );
      } else {
        console.log('Geolocation is not supported by this browser.');
      }

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
            setShowEditRating(true);
        }
        else {
          setShowEditRating(false);
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


    const [restaurant, setRestaurant] = useState(null);

    const RestaurantList = ( latitude, longitude, rating, price, radius, selectedOption ) => {

        const convertMilesToMeters = (radius) => {
          if (radius === 25) {
            let meters = 40000;
            return meters;
          }
          let meters = radius * 1609.34;
          console.log(Math.floor(meters))
          return Math.floor(meters);
        };
      
        let meters = convertMilesToMeters(radius);
      
        console.log(meters)
      
        const fetchData = async () => {
          try {
            if (latitude === null|| longitude === null) {
                const response = await fetch(
                `https://food-picker-demo.azurewebsites.net/get_restaurants?rating=${rating}&price=${price}&radius=${meters}&categories=${selectedOption}`
                );
                const data = await response.json();
                setRestaurant(data);
            }
            else {
                const response = await fetch(
                `https://food-picker-demo.azurewebsites.net/get_restaurants?latitude=${latitude}&longitude=${longitude}&rating=${rating}&price=${price}&radius=${meters}&categories=${selectedOption}`
                );
                const data = await response.json();
                setRestaurant(data);
            }

          } catch (error) {
            console.error(error);
          }
        };
      
        console.log(restaurant);
        fetchData();
      
        return restaurant;
      };

    const generateRandomRestaurant = () => {
      if (sliderValue === 0 || dollarHighlighted === -1 || rateHighlighted === -1) {
        alert("Must input something for every field!");
      }
      else {
        if(longitude  === null) {
          alert("Location not on. Defaulting to Houston....");
        }
        console.log('Generating random restaurant...');
        console.log('Rate Highlighted:', rateHighlighted);
        console.log('Dollar Sign Clicked:', dollarSignClicked);
        console.log('Slider Value:', sliderValue);
        setRestaurant(RestaurantList(latitude, longitude, rateHighlighted, dollarSignClicked, parseInt(sliderValue), selectedOption));
      }
    };


    return (
      <React.Fragment>
        <div className="Home">
          <div className="Rating">
            <h5>Rating:</h5>
            {showEditRating === true && (
              /* Editing restaurant rating criteria */
              <div className="rate-container">
                {[...Array(5)].map((e, i) => {
                  return (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className={rateHighlighted > i - 1 ? "orange" : ""}
                      onMouseEnter={highlightRate(i)}
                      onMouseLeave={highlightRate(-1)}
                      onClick={rateClicked(i)}
                    />
                  );
                })}
              </div>
            )}
            {showEditRating === false && (
              /* Show minimum rating requirement */
              <div>
                <FontAwesomeIcon
                  icon={faStar}
                  className={ratingClicked > 0 ? "orange" : ""}
                  onMouseDown={enableEditRating} />
                <FontAwesomeIcon
                  icon={faStar}
                  className={ratingClicked > 1 ? "orange" : ""}
                  onMouseDown={enableEditRating}                />
                <FontAwesomeIcon
                  icon={faStar}
                  className={ratingClicked > 2 ? "orange" : ""}
                  onMouseDown={enableEditRating}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className={ratingClicked > 3 ? "orange" : ""}
                  onMouseDown={enableEditRating}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className={ratingClicked > 4 ? "orange" : ""}
                  onMouseDown={enableEditRating}
                />
              </div>
            )}
          </div>
          <div className="Price">
            <h5>Price:</h5>
            {showEditDollar === true && (
              /* Editing max dollar range criteria */
              <div className="dollar-container">
                {[...Array(4)].map((e, i) => {
                  return (
                    <FontAwesomeIcon
                      key={i}
                      icon={faDollar}
                      className={dollarHighlighted > i - 1 ? "green" : ""}
                      onMouseEnter={highlightDollar(i)}
                      onMouseLeave={highlightDollar(-1)}
                      onClick={dollarClicked(i)}
                    />
                  );
                })}
              </div>
            )}
            {showEditDollar === false && (
              /* Show max dollar range requirement */
              <div>
                <FontAwesomeIcon
                  icon={faDollar}
                  className={dollarSignClicked > 0 ? "green" : ""}
                  onMouseDown={enableEditDollarSign}
                />
                <FontAwesomeIcon
                  icon={faDollar}
                  className={dollarSignClicked > 1 ? "green" : ""}
                  onMouseDown={enableEditDollarSign}
                />
                <FontAwesomeIcon
                  icon={faDollar}
                  className={dollarSignClicked > 2 ? "green" : ""}
                  onMouseDown={enableEditDollarSign}
                />
                <FontAwesomeIcon
                  icon={faDollar}
                  className={dollarSignClicked > 3 ? "green" : ""}
                  onMouseDown={enableEditDollarSign}
                />
              </div>
            )}
          </div>
          <div className="Distance">
            <h5>Distance: {sliderValue} miles </h5>
            {/* Setting the max distance possible */}
            <input
              type="range"
              class="form-range"
              min="0"
              max="25"
              step="1"
              id="customRange1"
              onChange={handleSliderChange}
            />
            {/* Yelp fusion api categories filter does not work well
                    enough for me to implement this functionality     */}
            {/* <h5>Type:</h5>
                <select value={selectedOption} onChange={handleOptionChange}
                    className="form-select" aria-label="Select Option">
                    <option value=""></option>
                        {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                    ))}
                </select> */}
          </div>
        </div>
        <div className="generateButton">
          <button
            className="btn btn-primary btn-lg mb-2"
            onMouseDown={generateRandomRestaurant}
          >
            generate random restaurant
          </button>
        </div>
        <div>
          {restaurant !== null && (
            <div className="pickedRest">
              <h5>
                <a href={restaurant[1]}>{restaurant[0]}</a>
              </h5>
              <img src={restaurant[2]} alt="restaurant photo" />
            </div>
          )}
        </div>

      </React.Fragment>
    );

}


export default Home;