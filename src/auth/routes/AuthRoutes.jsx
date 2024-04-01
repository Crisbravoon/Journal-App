
import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage, RegistrePage } from '../pages';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegistrePage />} />
      <Route path="/*" element={<Navigate to='/auth/login' />} />
    </Routes>
  )
};
