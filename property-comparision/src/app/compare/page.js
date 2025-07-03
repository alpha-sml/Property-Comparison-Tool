'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import ComparisonTable from '../../components/ComparisonTable/ComparisonTable';
import { useSelection } from '../../context/SelectionContext';
import './compare.css';

const ComparePage = () => {
  const router = useRouter();
  const { selectedProperties, clearSelection } = useSelection();

  const handleBack = () => {
    router.push('/favorites');
  };

  return (
    <div className="compare-page">
      <div className="compare-header">
        <h1>Compare Properties</h1>
        <div className="compare-actions">
          <button onClick={handleBack} className="button back-button">
            ← Back to Favorites
          </button>
          {selectedProperties.length > 0 && (
            <button onClick={clearSelection} className="button clear-button">
              Clear Selection
            </button>
          )}
        </div>
      </div>

      {selectedProperties.length === 2 ? (
        <ComparisonTable properties={selectedProperties} />
      ) : (
        <p className="compare-message">
          Please select exactly two properties from Favorites to compare.
        </p>
      )}
    </div>
  );
};

export default ComparePage;
