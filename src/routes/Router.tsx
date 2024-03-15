import { Route, Routes, Navigate } from 'react-router-dom';
import ApsLoginCode from '../apis/apsLoginCode';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/aps-oauth/callback" element={<ApsLoginCode />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default Router;
