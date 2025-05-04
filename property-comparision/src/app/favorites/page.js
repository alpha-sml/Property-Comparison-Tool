'use client';
import React from 'react';
import PropertyCard from '../../components/PropertyCard/PropertyCard';

const favoriteProperties = [
  {
    id: 3,
    title: 'Luxury Villa',
    price: 750000,
    size: 3200,
    location: 'LMN, OPQ',
    image: 'https://via.placeholder.com/300x180'
  },
  {
    id: 4,
    title: 'Downtown Apartment',
    price: 390000,
    size: 1500,
    location: 'RST, UVW',
    image: 'https://via.placeholder.com/300x180'
  }
];

const FavoritesPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Your Favorite Properties</h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {favoriteProperties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
