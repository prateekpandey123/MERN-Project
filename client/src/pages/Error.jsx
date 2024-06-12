import { NavLink } from "react-router-dom";

export const Error = () => {
  return (
    <>
      <section id="error-page">
        <div className="content">
          <h2 className="header">404</h2>
          <h4>Sorry! Page not found</h4>
          <p>
            Oops! The page you are looking for does not exist.t looks like the
            page you are trying to access is not available. This might be
            because The page has been moved or deleted. The URL is incorrect.
            There is a typo in the web address.
          </p>
          <div className="btns">
            <NavLink to="/">return home</NavLink>
            <NavLink to="/ContactUs">report problem</NavLink>
          </div>
        </div>
      </section>
    </>
  );
};
