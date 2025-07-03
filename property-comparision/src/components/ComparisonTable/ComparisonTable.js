import React from 'react';
import './ComparisonTable.css';

function ComparisonTable(props) {
  const properties = props.properties;

  if (!properties || properties.length !== 2) {
    return null;
  }

  const first = properties[0];
  const second = properties[1];

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
              src={first.image ? first.image : '/placeholder.jpg'}
              alt={first.title}
              className="comparison-image"
            />
          </td>
          <td>
            <img
              src={second.image ? second.image : '/placeholder.jpg'}
              alt={second.title}
              className="comparison-image"
            />
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Price</td>
          <td className={first.price < second.price ? 'highlight' : ''}>${first.price}</td>
          <td className={second.price < first.price ? 'highlight' : ''}>${second.price}</td>
        </tr>
        <tr>
          <td>Size</td>
          <td className={first.size > second.size ? 'highlight' : ''}>{first.size} sqft</td>
          <td className={second.size > first.size ? 'highlight' : ''}>{second.size} sqft</td>
        </tr>
        <tr>
          <td>Bedrooms</td>
          <td className={first.bedrooms > second.bedrooms ? 'highlight' : ''}>{first.bedrooms}</td>
          <td className={second.bedrooms > first.bedrooms ? 'highlight' : ''}>{second.bedrooms}</td>
        </tr>
        <tr>
          <td>Bathrooms</td>
          <td className={first.bathrooms > second.bathrooms ? 'highlight' : ''}>{first.bathrooms}</td>
          <td className={second.bathrooms > first.bathrooms ? 'highlight' : ''}>{second.bathrooms}</td>
        </tr>
        <tr>
          <td>Year Built</td>
          <td className={first.yearBuilt > second.yearBuilt ? 'highlight' : ''}>{first.yearBuilt}</td>
          <td className={second.yearBuilt > first.yearBuilt ? 'highlight' : ''}>{second.yearBuilt}</td>
        </tr>
        <tr>
          <td>Property Type</td>
          <td>{first.propertyType}</td>
          <td>{second.propertyType}</td>
        </tr>
        <tr>
          <td>Location</td>
          <td>{first.location}</td>
          <td>{second.location}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ComparisonTable;
