'use client';
import React, { useEffect, useState } from 'react';
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import { useFavorites } from '../../context/FavoritesContext';
import './listings.css';

const ListingsPage = () => {
  const { favoriteProperties, addToFavorites, removeFromFavorites } = useFavorites();
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch(
      'https://gist.githubusercontent.com/alpha-sml/6cebb505b603d89507b8e4f0d374246f/raw/014b714c50eef336f348275ab315212d70d98a0c/properties.json'
    )
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((err) => console.error('Failed to fetch properties:', err));
  }, []);

  const toggleFavorite = (property) => {
    const isFavorite = favoriteProperties.filter((fav) => fav.id === property.id).length > 0;
    isFavorite ? removeFromFavorites(property.id) : addToFavorites(property);
  };

  return (
    <div className="listings-page">
      <h1 className="listings-title">Property Listings</h1>
      <div className="property-grid">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            isFavorite={favoriteProperties.filter((fav) => fav.id === property.id).length > 0}
            onToggleFavorite={() => toggleFavorite(property)}
          />
        ))}
      </div>
    </div>
  );
};

export default ListingsPage;
