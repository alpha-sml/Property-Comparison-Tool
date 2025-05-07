'use client';
import React from 'react';
import Link from 'next/link';
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import { useSelection } from '../../context/SelectionContext';

const favoriteProperties = [
  {
    id: 3,
    title: 'Luxury Villa',
    price: 750000,
    size: 3200,
    location: 'LMN, OPQ',
    image: 'https://via.placeholder.com/300x180'
  },
  {
    id: 4,
    title: 'Downtown Apartment',
    price: 390000,
    size: 1500,
    location: 'RST, UVW',
    image: 'https://via.placeholder.com/300x180'
  }
];

const FavoritesPage = () => {
  const { selectedProperties, toggleSelectProperty } = useSelection();

  return (
    <div style={{ padding: '20px' }}>
      <h1>Your Favorite Properties</h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {favoriteProperties.map(property => (
          <div key={property.id} onClick={() => toggleSelectProperty(property)}>
            <PropertyCard property={property} isSelected={selectedProperties.some(p => p.id === property.id)} />
          </div>
        ))}
      </div>

      {selectedProperties.length === 2 && (
        <div style={{ marginTop: '20px' }}>
          <Link href="/compare">
            <button className="favorite-button">Compare Selected</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
