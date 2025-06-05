'use client';
import React, { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favoriteProperties, setFavoriteProperties] = useState([]);

  const addToFavorites = (property) => {
    if (!favoriteProperties.find(p => p.id === property.id)) {
      setFavoriteProperties(prev => [...prev, property]);
    }
  };

  const removeFromFavorites = (id) => {
    setFavoriteProperties(prev => prev.filter(p => p.id !== id));
  };

  return (
    <FavoritesContext.Provider value={{ favoriteProperties, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
