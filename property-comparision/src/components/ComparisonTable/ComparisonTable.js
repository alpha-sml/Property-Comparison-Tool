import React from 'react';
import './ComparisonTable.css';

const fields = [
  { label: 'Price', key: 'price', compare: (a, b) => a < b },
  { label: 'Size', key: 'size', compare: (a, b) => a > b, unit: 'sqft' },
  { label: 'Bedrooms', key: 'bedrooms', compare: (a, b) => a > b },
  { label: 'Bathrooms', key: 'bathrooms', compare: (a, b) => a > b },
  { label: 'Year Built', key: 'yearBuilt', compare: (a, b) => a > b },
  { label: 'Property Type', key: 'propertyType' },
  { label: 'Location', key: 'location' },
];

const ComparisonTable = ({ properties }) => {
  if (!properties || properties.length !== 2) return null;

  const [first, second] = properties;

  const getHighlight = (field, val1, val2) => {
    if (!field.compare) return [false, false];
    return [field.compare(val1, val2), field.compare(val2, val1)];
  };

  return (
    <table className="comparison-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>{first.title}</th>
          <th>{second.title}</th>
        </tr>
        <tr>
          <td>Image</td>
          <td>
            <img
              src={first.image || '/placeholder.jpg'}
              alt={first.title}
              className="comparison-image"
            />
          </td>
          <td>
            <img
              src={second.image || '/placeholder.jpg'}
              alt={second.title}
              className="comparison-image"
            />
          </td>
        </tr>
      </thead>
      <tbody>
        {fields.map((field) => {
          const val1 = first[field.key];
          const val2 = second[field.key];
          const [highlight1, highlight2] = getHighlight(field, val1, val2);

          return (
            <tr key={field.key}>
              <td>{field.label}</td>
              <td className={highlight1 ? 'highlight' : ''}>
                {val1} {field.unit || ''}
              </td>
              <td className={highlight2 ? 'highlight' : ''}>
                {val2} {field.unit || ''}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ComparisonTable;
