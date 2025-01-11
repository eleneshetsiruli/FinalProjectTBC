import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const userSession = localStorage.getItem("user");
  console.log(userSession);

  if (!userSession) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};
