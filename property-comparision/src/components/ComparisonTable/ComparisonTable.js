import React from 'react';
import './ComparisonTable.css';

const ComparisonTable = ({ properties }) => {
  return (
    <table className="comparison-table">
      <thead>
        <tr>
          <th>Feature</th>
          {properties.map((p) => (
            <th key={p.id}>{p.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Price</td>
          {properties.map((p) => (
            <td key={p.id}>${p.price}</td>
          ))}
        </tr>
        <tr>
          <td>Size</td>
          {properties.map((p) => (
            <td key={p.id}>{p.size} sqft</td>
          ))}
        </tr>
        <tr>
          <td>Location</td>
          {properties.map((p) => (
            <td key={p.id}>{p.location}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default ComparisonTable;
