import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { PDFProvider } from './context/PDFContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <PDFProvider>
          <App />
        </PDFProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
