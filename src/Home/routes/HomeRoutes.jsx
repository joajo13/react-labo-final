import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../views/HomePage";
import { UserPage } from "../../User/views/UserPage";

export const HomeRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
