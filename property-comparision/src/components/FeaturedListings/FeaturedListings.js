import React from 'react';
import PropertyCard from '../PropertyCard/PropertyCard';
import './FeaturedListings.css';

const featuredProperties = [
  {
    id: 101,
    title: 'Beachside Bungalow',
    price: 520000,
    size: 2000,
    location: 'Santa Monica, CA',
    image: 'https://via.placeholder.com/300x180'
  },
  {
    id: 102,
    title: 'Urban Loft',
    price: 610000,
    size: 1800,
    location: 'Brooklyn, NY',
    image: 'https://via.placeholder.com/300x180'
  },
  {
    id: 103,
    title: 'Mountain Cabin',
    price: 420000,
    size: 1600,
    location: 'Aspen, CO',
    image: 'https://via.placeholder.com/300x180'
  }
];

const FeaturedListings = () => {
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
