import React from 'react';
import './faq.css';

const Faq = () => {
    return (
        <div className="faq-box">
            <h1>FAQ</h1>
            <h3>Ratings are lower than the minimum bound of stars I put?</h3>
            <p>the rating sort is not strictly sorted by the rating value, 
                but by an adjusted rating value to prevent skewing from businesses with few reviews 
                &nbsp;<a href="https://docs.developer.yelp.com/reference/v3_business_search">see more here
            </a></p>
            

            <h3>Nothing is showing up after clicking the generate button?</h3>
            <p>I'm using the free tier of the web app service plan from Azure because I am a broke college student.
            If no one uses this website for awhile, the backend will take some time to turn back on again.
             Give it some time and a result will show or try refreshing.
            </p>
            <h3>Not generating a restaurant still?</h3>
            <p>
            I am using yelp's fusionAPI which only gives me 5000 API hits everyday. 
            If I reach the limit I will not be able to continue generating a random restaurant from their API.
            </p>
        </div>
    );


}

export default Faq;