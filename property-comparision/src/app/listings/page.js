// src/app/listings/page.js
import React from 'react';
import PropertyCard from '../../components/PropertyCard/PropertyCard';

const dummyProperties = [
  {
    id: 1,
    title: 'Modern Family House',
    price: 450000,
    size: 2100,
    location: 'XYZ, ABC',
    image: 'https://eg.placeholder.com/300x180'
  },
  {
    id: 2,
    title: 'Cozy Cottage',
    price: 280000,
    size: 1300,
    location: 'QWE, VBN',
    image: 'https://eg.placeholder.com/300x180'
  }
];

const ListingsPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Property Listings</h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {dummyProperties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default ListingsPage;
