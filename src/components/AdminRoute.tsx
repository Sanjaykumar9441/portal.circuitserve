import { Navigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const AdminRoute = ({ children }: Props) => {
  const user = JSON.parse(
    localStorage.getItem("user") || "{}"
  );

  if (user.role !== "admin") {
    return <Navigate to="/daily-progress" replace />;
  }

  return <>{children}</>;
};

export default AdminRoute;