import { Outlet } from "react-router-dom";

export const AdminLayout = () => {
  return (
    <h1>
      <Outlet />
    </h1>
  );
};
