'use client';
import React, { useState } from 'react';
import PropertyCard from '../../components/PropertyCard/PropertyCard';

const dummyProperties = [
  {
    id: 1,
    title: 'Modern Family House',
    price: 450000,
    size: 2100,
    location: 'XYZ, ABC',
    image: 'https://via.placeholder.com/300x180'
  },
  {
    id: 2,
    title: 'Cozy Cottage',
    price: 280000,
    size: 1300,
    location: 'QWE, VBN',
    image: 'https://via.placeholder.com/300x180'
  }
];

const ListingsPage = () => {
  const [favorites, setFavorites] = useState([]);

  const handleAddToFavorites = (property) => {
    const alreadyAdded = favorites.some(fav => fav.id === property.id);
    if (!alreadyAdded) {
      setFavorites([...favorites, property]);
      console.log('Added to favorites:', property.title);
    } else {
      alert('This property is already in favorites.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Property Listings</h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {dummyProperties.map(property => (
          <PropertyCard
            key={property.id}
            property={property}
            onAddToFavorites={handleAddToFavorites}
          />
        ))}
      </div>
    </div>
  );
};

export default ListingsPage;
