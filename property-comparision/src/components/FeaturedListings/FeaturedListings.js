'use client';
import React, { useEffect, useState } from 'react';
import PropertyCard from '../PropertyCard/PropertyCard';
import './FeaturedListings.css';

const FeaturedListings = () => {
  const [featuredProperties, setFeaturedProperties] = useState([]);

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/alpha-sml/6cebb505b603d89507b8e4f0d374246f/raw/014b714c50eef336f348275ab315212d70d98a0c/properties.json')
      .then((res) => res.json())
      .then((data) => setFeaturedProperties(data.slice(0, 5)))
      .catch((err) => console.error('Failed to fetch featured listings:', err));
  }, []);

  return (
    <section className="featured-listings-container">
      <h2>Featured Listings</h2>
      <div className="featured-listings-scroll">
        {featuredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedListings;
