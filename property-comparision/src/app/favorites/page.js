'use client';
import React from 'react';
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import ProtectedRoute from '../../components/ProtectedRoute'
import { useFavorites } from '../../context/FavoritesContext';
import { useSelection } from '../../context/SelectionContext';
import Link from 'next/link';
import './favorites.css';

const FavoritesPage = () => {
  const { favoriteProperties, removeFromFavorites } = useFavorites();
  const { selectedProperties, toggleSelectProperty } = useSelection();

  const isSelected = (property) =>
    selectedProperties.filter(p => p.id === property.id).length > 0;

  return (
    <ProtectedRoute>
      <div className="favorites-page">
      <h1 className="favorites-title">Your Favorite Properties</h1>

      {favoriteProperties.length === 0 ? (
        <p className="favorites-empty">No favorites yet.</p>
      ) : (
        <>
          <div className="favorites-list">
            {favoriteProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onRemoveFromFavorites={removeFromFavorites}
                onSelect={toggleSelectProperty}
                isSelected={isSelected(property)}
              />
            ))}
          </div>

          {selectedProperties.length === 2 && (
            <Link href="/compare" className="compare-button">
              Compare Selected
            </Link>
          )}
        </>
      )}
    </div>
    </ProtectedRoute>
    
  );
};

export default FavoritesPage;
