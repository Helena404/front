import React from 'react';
import { useLocation } from 'react-router-dom';
import Login from './Login/Login';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('jwtToken');
  const location = useLocation(); // Чтобы передать путь для перенаправления после входа

  if (!token) {
    return <Login redirectTo={location.pathname} />;
  }

  return children;
};

export default ProtectedRoute;
