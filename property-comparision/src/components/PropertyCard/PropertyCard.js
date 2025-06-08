import React from 'react';
import './PropertyCard.css';

const PropertyCard = ({
  property,
  isFavorite,
  onToggleFavorite,
  onSelect,
  isSelected
}) => {
  return (
    <div className={`property-card ${isSelected ? 'selected' : ''}`}>
      <img
        src={property.image || '/placeholder.jpg'}
        alt={property.title || 'Property image'}
        className="property-image"
      />
      <div className="property-details">
        <h3>{property.title}</h3>
        <p>Price: ${property.price}</p>
        <p>Size: {property.size} sqft</p>
        <p>Location: {property.location}</p>

        {onToggleFavorite && (
          <button
            className="favorite-button"
            onClick={() => onToggleFavorite(property)}
            aria-pressed={isFavorite}
          >
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        )}

        {onSelect && (
          <button
            className="select-button"
            onClick={() => onSelect(property)}
          >
            Select to Compare
          </button>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;
