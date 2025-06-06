'use client';
import React from 'react';
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import { useFavorites } from '../../context/FavoritesContext';

const dummyProperties = [
  {
    id: 1,
    title: 'Modern Family House',
    price: 450000,
    size: 2100,
    location: 'XYZ, ABC',
    image: 'https://via.placeholder.com/300x180',
  },
  {
    id: 2,
    title: 'Cozy Cottage',
    price: 280000,
    size: 1300,
    location: 'QWE, VBN',
    image: 'https://via.placeholder.com/300x180',
  },
];

const ListingsPage = () => {
  const { favoriteProperties, addToFavorites, removeFromFavorites } = useFavorites();

  const toggleFavorite = (property) => {
    const isAlreadyFavorite = favoriteProperties.some((fav) => fav.id === property.id);
    if (isAlreadyFavorite) {
      removeFromFavorites(property.id);
    } else {
      addToFavorites(property);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Property Listings</h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {dummyProperties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            isFavorite={favoriteProperties.some((fav) => fav.id === property.id)}
            onToggleFavorite={() => toggleFavorite(property)}
          />
        ))}
      </div>
    </div>
  );
};

export default ListingsPage;
