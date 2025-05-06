import React from 'react';
import './InfoSection.css';

const InfoSection = () => {
  return (
    <section className="info-section">
      <h2>How It Works</h2>
      <div className="steps">
        <div className="step">
          <h3>1. Browse Listings</h3>
          <p>Explore various properties based on your preferences.</p>
        </div>
        <div className="step">
          <h3>2. Add to Favorites</h3>
          <p>Save properties you like to your favorites list.</p>
        </div>
        <div className="step">
          <h3>3. Compare Properties</h3>
          <p>View your favorite properties side-by-side and make a better choice.</p>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
