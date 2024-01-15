import React from 'react'
import './about.css'

const About = () => {
    return (
      <React.Fragment>
        <div className="info">
          <h1>How it Works</h1>
          <p> This simple website is for randomly generating a restaurant using yelp's fusion API</p>
          <p>1. Add minimum star requirement up to 5 starts.</p>
          <p>2. Choose maxmium price of restaurant up to 4 dollar signs.</p>
          <p>3. Choose maximum radius away from your location.</p>
          <p>4. Click submit to see what you get!</p>
        </div>
      </React.Fragment>
    );
}


export default About;