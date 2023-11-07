import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const PrivateRoute = ({ children }) => {
  const { state } = useContext(AuthContext);
  const { isAuthenticated } = state;

  return isAuthenticated ? children : <Navigate to="auth/login" />;
};
