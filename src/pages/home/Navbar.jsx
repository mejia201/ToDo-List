import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserDataContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";

export const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();


  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        navigate('/'); 
      })
      .catch((error) => {
        console.error("Error al cerrar sesión:", error);
      });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Logo y Home */}
        <Link className="navbar-brand" to="/">
          ToDo App
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/tasks">Tasks</Link>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto">
            {user ? (
              <>
                <li className="nav-item mt-2 me-3">
                  <span className="navbar-text">
                    {user.email}
                  </span>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-danger ml-2" onClick={logout}>
                    Cerrar sesión
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link className="btn btn-outline-primary" to="/session">
                  Iniciar sesión
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
