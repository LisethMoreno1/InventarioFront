import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

// Componente ProtectedRoute
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  // Lee el token de autenticación de las cookies
  const authToken = Cookies.get('authToken'); 

  return authToken ? <>{children}</> : <Navigate to="/login" />;
};

export default ProtectedRoute;
