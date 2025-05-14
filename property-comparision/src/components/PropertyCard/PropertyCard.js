'use client';
import React from 'react';
import './PropertyCard.css';

const PropertyCard = ({ property, onAddToFavorites, onSelect, selected }) => {
  const handleClick = () => {
    if (onSelect) onSelect(property);
  };

  return (
    <div
      className={`property-card ${selected ? 'selected' : ''}`}
      onClick={handleClick}
    >
      <img src={property.image} alt={property.title} className="property-image" />
      <div className="property-details">
        <h3>{property.title}</h3>
        <p>Price: ${property.price}</p>
        <p>Size: {property.size} sqft</p>
        <p>Location: {property.location}</p>
        {onAddToFavorites && (
          <button
            className="favorite-button"
            onClick={(e) => {
              e.stopPropagation();
              onAddToFavorites(property);
            }}
          >
            Add to Favorites
          </button>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;
