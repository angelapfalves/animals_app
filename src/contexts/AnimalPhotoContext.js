import React, { createContext, useState } from 'react';

export const AnimalPhotoContext = createContext();

export function PhotoProvider({ children }) {
  const [photo, setPhoto] = useState(null);

  return (
    <AnimalPhotoContext.Provider value={{ photo, setPhoto }}>
      {children}
    </AnimalPhotoContext.Provider>
  );
}