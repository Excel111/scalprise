import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  
  return token ? children : <Navigate to="/admin/login" replace />;
};

export default AdminProtectedRoute;