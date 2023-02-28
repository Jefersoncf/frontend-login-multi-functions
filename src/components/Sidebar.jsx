import React from "react";
import { NavLink } from "react-router-dom";
import { IoPerson, IoPricetag, IoHome, IoLogOut } from "react-icons/io5";

const Sidebar = () => {
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
        <p className="menu-label">Configurações</p>
        <ul className="menu-list">
          <li>
            <NavLink to="#">Sistema</NavLink>
          </li>
          <li>
            <NavLink to="#">Suporte</NavLink>
          </li>
          <li>
            <button className="button is-while">
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
