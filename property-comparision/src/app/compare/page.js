'use client';
import React from 'react';
import ComparisonTable from '../../components/ComparisonTable/ComparisonTable';
import { useSelection } from '../../context/SelectionContext';

const ComparePage = () => {
  const { selectedProperties, clearSelection } = useSelection();

  return (
    <div style={{ padding: '20px' }}>
      <h1>Compare Properties</h1>
      {selectedProperties.length === 2 ? (
        <>
          <ComparisonTable properties={selectedProperties} />
          <button
            onClick={clearSelection}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#0070f3',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            Clear Selection
          </button>
        </>
      ) : (
        <p>Please select two properties from your favorites to compare.</p>
      )}
    </div>
  );
};

export default ComparePage;
