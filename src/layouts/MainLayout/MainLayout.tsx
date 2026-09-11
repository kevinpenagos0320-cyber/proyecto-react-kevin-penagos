// =================================================================
// Archivo: src/layouts/MainLayout/MainLayout.tsx
//RESPONSABILIDAD: Layout Shell que integra el componente <NavBar/> y la barra de sesión
//con el botón de cierre de sesión (<Outlet/> para rutas hijas).
// =================================================================
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import { useAuth } from '../../context/AuthContext/AuthContext';

export default function MainLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <div >
      <NavBar />
     </div>
  );
}