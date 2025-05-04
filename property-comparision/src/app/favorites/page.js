'use client';
import React from 'react';
import PropertyCard from '../../components/PropertyCard/PropertyCard';

const favoriteProperties = [
  {
    id: 1,
    title: 'Modern Family House',
    price: 450000,
    size: 2100,
    location: 'XYZ, ABC',
    image: 'https://via.placeholder.com/300x180'
  },
  {
    id: 3,
    title: 'Luxury Villa',
    price: 750000,
    size: 3200,
    location: 'RST, UVW',
    image: 'https://via.placeholder.com/300x180'
  }
];

export default function Favorites() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Your Favorite Properties</h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {favoriteProperties.length > 0 ? (
          favoriteProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))
        ) : (
          <p>You haven't added any favorite properties yet.</p>
        )}
      </div>
    </div>
  );
}
