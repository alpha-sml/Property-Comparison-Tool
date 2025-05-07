import React from 'react';
import './PropertyCard.css';

const PropertyCard = ({ property, isSelected }) => {
  return (
    <div className={`property-card ${isSelected ? 'selected' : ''}`}>
      <img src={property.image} alt={property.title} className="property-image" />
      <div className="property-details">
        <h3>{property.title}</h3>
        <p>Price: ${property.price}</p>
        <p>Size: {property.size} sqft</p>
        <p>Location: {property.location}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
