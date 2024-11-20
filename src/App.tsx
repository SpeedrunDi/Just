import React from 'react';
import { FavoritesProvider } from './contexts/FavoritesContext';
import HomePage from './pages/HomePage/HomePage.tsx';

const App: React.FC = () => (
  <FavoritesProvider>
    <HomePage />
  </FavoritesProvider>
);

export default App;
