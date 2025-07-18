import React from 'react';
import './HeroSection.css';
import Link from 'next/link';

const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-overlay">
      <div className="hero-content">
        <h1 className="hero-title">Find and Compare Your Dream Property</h1>
        <p className="hero-description">
          Easily compare properties by price, size, and location to make informed decisions.
        </p>
        <Link href="/listings">
          <button className="hero-button">Explore Listings</button>
        </Link>
      </div>
    </div>
  </section>
);

export default HeroSection;
