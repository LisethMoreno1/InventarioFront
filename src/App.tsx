import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import ProtectedRoute from './componets/Auth/ProtectedRoute';

const App: React.FC = () => {
  return (
    <Router>
      <ProtectedRoute>
        <AppRouter />
      </ProtectedRoute>
    </Router>
  );
};

export default App;
