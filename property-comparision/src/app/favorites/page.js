'use client';
import React from 'react';
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import { useFavorites } from '../../context/FavoritesContext';

const FavoritesPage = () => {
  const { favoriteProperties } = useFavorites();

  return (
    <div style={{ padding: '20px' }}>
      <h1>Your Favorite Properties</h1>
      {favoriteProperties.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {favoriteProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
