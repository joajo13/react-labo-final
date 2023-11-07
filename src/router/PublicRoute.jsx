import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
  const { state } = useContext(AuthContext);
  const { isAuthenticated } = state;

  return isAuthenticated ? <Navigate to="/home" /> : children;
};
