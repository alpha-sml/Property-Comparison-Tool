'use client';
import React from 'react';
import ComparisonTable from '../../components/ComparisonTable/ComparisonTable';
import { useSelection } from '../../context/SelectionContext';
import './compare.css';
import Link from 'next/link';

const ComparePage = () => {
  const { selectedProperties, clearSelection } = useSelection();

  return (
    <div className="compare-page">
      <div className="compare-header">
        <h1>Compare Properties</h1>
        <div className="compare-actions">
          <Link href="/favorites" className="back-button">
            ← Back to Favorites
          </Link>
          {selectedProperties.length > 0 && (
            <button onClick={clearSelection} className="clear-button">
              Clear Selection
            </button>
          )}
        </div>
      </div>

      {selectedProperties.length === 2 ? (
        <ComparisonTable properties={selectedProperties} />
      ) : (
        <p className="compare-message">Please select exactly two properties from Favorites to compare.</p>
      )}
    </div>
  );
};

export default ComparePage;
