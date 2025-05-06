'use client';
import Link from 'next/link';
import React from 'react';
import './CTASection.css';

const HeroSection = () => {
  return (
    <div className="hero">
      <h1>Compare Properties Easily</h1>
      <p>Find the best property by comparing listings side by side.</p>
      <Link href="/listings">
        <button className="get-started-button">Get Started</button>
      </Link>
    </div>
  );
};

export default HeroSection;
