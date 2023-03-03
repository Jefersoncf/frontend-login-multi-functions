import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoPerson, IoPricetag, IoHome, IoLogOut } from "react-icons/io5";
import { Logout, reset } from "../features/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(Logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div>
      <aside className="menu pl-2 has-shadow">
        <p className="menu-label">Geral</p>
        <ul className="menu-list">
          <li>
            <NavLink to="/dashboard">
              <IoHome />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/products">
              <IoPricetag />
              Produtos
            </NavLink>
          </li>
        </ul>

        {user && user.role === "admin" && (
          <div>
            <p className="menu-label">Admin</p>
            <ul className="menu-list">
              <li>
                <NavLink to="/users">
                  <IoPerson />
                  Usuários
                </NavLink>
              </li>
              <li>
                <NavLink to="#"></NavLink>
              </li>
            </ul>
          </div>
        )}

        <p className="menu-label">Configurações</p>
        <ul className="menu-list">
          <li>
            <NavLink to="#">Sistema</NavLink>
          </li>
          <li>
            <NavLink to="#">Suporte</NavLink>
          </li>
          <li>
            <button onClick={logout} className="button is-while">
              <IoLogOut />
              Logout
            </button>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
