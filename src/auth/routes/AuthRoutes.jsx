import { Navigate, Route, Routes } from "react-router-dom";
import { RegisterPage } from "../views/RegisterPage";
import { LoginPage } from "../views/LoginPage";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />

      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
