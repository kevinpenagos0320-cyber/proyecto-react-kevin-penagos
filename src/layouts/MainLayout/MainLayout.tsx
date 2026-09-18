// =================================================================
// Archivo: src/layouts/MainLayout/MainLayout.tsx
// Layout Shell integrado con NavBar, Información de Usuario y Logout
// =================================================================
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import { useAuth } from '../../context/AuthContext/AuthContext';

export default function MainLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    // 1. Limpia sessionStorage y estado global
    logout();
    // 2. Redirige al login
    navigate('/login');
  };

  return (
    <div className="layout-shell min-h-screen bg-slate-900 text-slate-100 flex flex-col">
      {/* 1. Componente Navbar Aislado */}
      <NavBar />

      {/* 2. Barra de Sesión e Información del Usuario Autenticado */}
      <div className="bg-slate-800/80 border-b border-slate-700/60 px-6 py-2.5 flex items-center justify-between shadow-inner text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-sena-green animate-pulse"></span>
          <span className="text-slate-400">Sesión Activa:</span>
          <strong className="text-white">{user?.nombreCompleto || 'Usuario Autenticado'}</strong>
          <span className="bg-sena-green/20 text-sena-green px-2 py-0.5 rounded text-[10px] font-bold border border-sena-green/30">
            {user?.role || 'Rol'}
          </span>
        </div>

        <button
          onClick={handleLogout}
          className="px-3 py-1 bg-rose-900/60 hover:bg-rose-700 text-rose-200 border border-rose-500/50 rounded-lg text-xs font-bold transition shadow-sm flex items-center gap-1"
        >
          Cerrar Sesión
        </button>
      </div>

      {/* 3. Contenedor de Vistas Principales */}
      <main className="content-viewport flex-1 p-6">
        {/* Aquí React Router inyecta la página que coincida con la URL */}
        <Outlet />
      </main>
    </div>
  );
}