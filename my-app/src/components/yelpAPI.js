import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  const express = require('express')
  const app = express()
  const port = 3001
  const cors = require('cors');
  const yelp = require('yelp-fusion');
  const apiKey = 'YOUR-API-KEY';
  const client = yelp.client(apiKey);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.yelp.com/v3/businesses/search', {
          headers: {
            ContentType: 'application/json',
            Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
          },
          params: {
            term: 'restaurants',
            location: 'San Francisco',
            limit: 50,
          },
        });
        setRestaurants(response.data.businesses);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;