import React from 'react';
import './InfoSection.css';

const InfoSection = () => {
  const steps = [
    {
      emoji: '1️⃣',
      title: 'Browse Listings',
      description: 'Explore various properties based on your preferences.',
    },
    {
      emoji: '2️⃣',
      title: 'Add to Favorites',
      description: 'Save properties you like to your favorites list.',
    },
    {
      emoji: '3️⃣',
      title: 'Compare Properties',
      description: 'View your favorite properties side-by-side and make a better choice.',
    },
  ];

  return (
    <section className="info-section">
      <h2>How It Works</h2>
      <div className="steps">
        {steps.map((step, index) => (
          <div className="step" key={index}>
            <h3>{step.emoji} {step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoSection;
