// import CardsDashBoard from "./components/CardsDashBoard/CardsDashBoard";

// export default function App() {
//   return (
//     <div>
//       <CardsDashBoard
//         titulo="division"
//         numero= {3}
//         mensaje ="hola"
//       />

//       <CardsDashBoard
//       titulo="xd"
//       numero={2}
//       mensaje="adios"
//       />
//        <CardsDashBoard
//       titulo="ola"
//       numero={1}
//       mensaje="chao"
//       />
//     </div>
//   );
// }

import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import EquiposPage from "./pages/EquiposPage/EquiposPage";
import NuevoEquipoPage from "../src/pages/NuevoEquipoPages/NuevoEquipoPages";
import DetalleEquipoPage from "./pages/DetalleEquipoPage/DetalleEquipoPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProtectedRoute from "./routes/ProtectedRoute";
// 🛡️ Importamos la guardia de seguridad


export default function App() {
  return (
    <Routes>

       {/* 1. Ruta Pública (Accesible para cualquiera) */}
      
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<Navigate to="/login" replace />} />


      {/* 2. Nivel 1 de Protección: Requiere cualquier usuario autenticado (Aprendiz, Instructor, Admin) */}
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="inventario" element={<EquiposPage />} />

          {/* 3. Nivel 2 de Protección (RBAC): Exclusivo para el rol 'Administrador' */}
          <Route element={<ProtectedRoute requiredRole="Administrador" />}>
            <Route path="inventario/nuevo" element={<NuevoEquipoPage />} />
            <Route path="inventario/:placaSena" element={<DetalleEquipoPage />} />
          </Route>
        </Route>
      </Route>

    </Routes>
  );
}
