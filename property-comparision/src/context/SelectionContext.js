'use client';
import React, { createContext, useContext, useState } from 'react';

const SelectionContext = createContext();

export const SelectionProvider = ({ children }) => {
  const [selectedProperties, setSelectedProperties] = useState([]);

  const toggleSelectProperty = (property) => {
    setSelectedProperties((prev) => {
      const isSelected = prev.find((p) => p.id === property.id);
      if (isSelected) {
        return prev.filter((p) => p.id !== property.id);
      } else if (prev.length < 2) {
        return [...prev, property];
      } else {
        return prev;
      }
    });
  };

  return (
    <SelectionContext.Provider value={{ selectedProperties, toggleSelectProperty }}>
      {children}
    </SelectionContext.Provider>
  );
};

export const useSelection = () => useContext(SelectionContext);
