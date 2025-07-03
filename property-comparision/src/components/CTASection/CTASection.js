'use client';
import Link from 'next/link';
import React from 'react';
import './CTASection.css';

const CTASection = () => {
  return (
    <section className="cta-section">
      <h2>Compare Properties Easily</h2>
      <p>Find the best property by comparing listings side by side.</p>
      <Link href="/listings">
        <button className="cta-button">Get Started</button>
      </Link>
    </section>
  );
};

export default CTASection;
