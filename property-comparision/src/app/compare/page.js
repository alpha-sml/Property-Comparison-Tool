import React from 'react';
import ComparisonTable from '../../components/ComparisonTable/ComparisonTable';

const dummyProperties = [
  {
    id: 1,
    title: 'Modern Family House',
    price: 450000,
    size: 2100,
    location: 'New York, NY'
  },
  {
    id: 2,
    title: 'Cozy Cottage',
    price: 280000,
    size: 1300,
    location: 'Austin, TX'
  }
];

const ComparePage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Compare Properties</h1>
      <ComparisonTable properties={dummyProperties} />
    </div>
  );
};

export default ComparePage;
