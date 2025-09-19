// context/PDFContext.js
import React, { createContext, useEffect, useState } from 'react';

export const PDFContext = createContext();

export const PDFProvider = ({ children }) => {
  const [pdfs, setPdfs] = useState(() => {
    const stored = localStorage.getItem('uploaded_pdfs');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('uploaded_pdfs', JSON.stringify(pdfs));
  }, [pdfs]);

  const addPdf = (newPdf) => {
    setPdfs((prev) => [...prev, newPdf]);
  };

  return (
    <PDFContext.Provider value={{ pdfs, addPdf }}>
      {children}
    </PDFContext.Provider>
  );
};
