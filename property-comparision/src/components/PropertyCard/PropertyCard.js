import React from 'react';
import './PropertyCard.css';

const PropertyCard = ({
  property,
  isFavorite,
  onToggleFavorite,
  onSelect,
  isSelected
}) => {
  const imageSrc = property.image ? property.image : '/placeholder.jpg';
  const imageAlt = property.title ? property.title : 'Property image';

  return (
    <div className={`property-card ${isSelected ? 'selected' : ''}`}>
      <img
        src={imageSrc}
        alt={imageAlt}
        className="property-image"
      />
      <div className="property-details">
        <h3>{property.title}</h3>
        <p><strong>Price:</strong> ${property.price}</p>
        <p><strong>Size:</strong> {property.size} sqft</p>
        <p><strong>Location:</strong> {property.location}</p>

        <div className="card-actions">
          {onToggleFavorite ? (
            <button
              className="favorite-button"
              onClick={() => onToggleFavorite(property)}
              aria-pressed={isFavorite}
            >
              {isFavorite ? '★ Remove Favorite' : '☆ Add to Favorites'}
            </button>
          ) : null}

          {onSelect ? (
            <button
              className="select-button"
              onClick={() => onSelect(property)}
            >
              {isSelected ? '✓ Selected' : 'Select to Compare'}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
