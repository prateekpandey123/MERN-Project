import { NavLink, Navigate, Outlet } from "react-router-dom";
import { FaUser, FaHome } from "react-icons/fa";
import { FaMessage, FaServicestack } from "react-icons/fa6";
import { useAuth } from "../../store/auth";

export const AdminLayout = () => {
  const { user } = useAuth();
  console.log("admin layout", user);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li>
                <NavLink to="/admin/users">
                  <FaUser />
                  users
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/contacts">
                  <FaMessage />
                  Contacts
                </NavLink>
              </li>
              <li>
                <NavLink to="/service">
                  <FaServicestack />
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FaHome />
                  Home
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};
