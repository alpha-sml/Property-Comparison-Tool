'use client';
import React, { useEffect, useState } from 'react';
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import { useFavorites } from '../../context/FavoritesContext';
import './listings.css';

const ListingsPage = () => {
  const { favoriteProperties, addToFavorites, removeFromFavorites } = useFavorites();
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/alpha-sml/6cebb505b603d89507b8e4f0d374246f/raw/a08529383029aa592347d09cc99afe9348dc267a/properties.json')
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((error) => console.error('Error fetching properties:', error));
  }, []);

  const toggleFavorite = (property) => {
    const isAlreadyFavorite = favoriteProperties.filter(fav => fav.id === property.id).length > 0;
    if (isAlreadyFavorite) {
      removeFromFavorites(property.id);
    } else {
      addToFavorites(property);
    }
  };

  return (
    <div className="listings-page">
      <h1>Property Listings</h1>
      <div className="property-grid">
        {properties.map((property) => {
          const isFavorite = favoriteProperties.filter(fav => fav.id === property.id).length > 0;

          return (
            <PropertyCard
              key={property.id}
              property={property}
              isFavorite={isFavorite}
              onToggleFavorite={() => toggleFavorite(property)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ListingsPage;
