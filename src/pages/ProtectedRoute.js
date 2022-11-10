import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ user, children }) => {
  return !user ? <Navigate to="/" /> : children;
};
