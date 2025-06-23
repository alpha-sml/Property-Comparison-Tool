'use client';
import React, { useEffect, useState } from 'react';
import PropertyCard from '../PropertyCard/PropertyCard';
import './FeaturedListings.css';

const FeaturedListings = () => {
  const [featuredProperties, setFeaturedProperties] = useState([]);

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/alpha-sml/6cebb505b603d89507b8e4f0d374246f/raw/a08529383029aa592347d09cc99afe9348dc267a/properties.json')
      .then((res) => res.json())
      .then((data) => {
        const topThree = data.filter((_, index) => index < 3);
        setFeaturedProperties(topThree);
      })
      .catch((err) => console.error('Failed to fetch featured listings:', err));
  }, []);

  return (
    <div className="featured-listings-container">
      <h2>Featured Listings</h2>
      <div className="featured-listings-scroll">
        {featuredProperties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedListings;
