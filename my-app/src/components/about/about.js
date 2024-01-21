import React from 'react'
import './about.css'

const About = () => {
    return (
      <React.Fragment>
        <div className="info">
          <h2>Why did I make this</h2>
          <p>Had an excess of free time and I have been obssessed with Yelp recently. Wanted to make a website using React and Django combined.</p>
          <h2>How it Works</h2>
          <p> This simple website is for randomly generating a restaurant using yelp's fusion API</p>
          <p>1. Add minimum star requirement up to 5 starts.</p>
          <p>2. Choose maxmium price of restaurant up to 4 dollar signs.</p>
          <p>3. Choose maximum radius away from your location.</p>
          <p>4. Click submit to see what you get!</p>
          <p><a href="https://github.com/taventran/restaurantPicker">5. Browse the code here </a></p>
          <h2>Why did I use Django?</h2>
          <p>I wanted to better hide my API key and also I could 
            not fetch from their API directly with React 
            due to some CORS settings. Solution I found online was to make
            a small backend to call Yelp's API and then serve it to
            the frontend which I did.</p>
        </div>
      </React.Fragment>
    );
}


export default About;