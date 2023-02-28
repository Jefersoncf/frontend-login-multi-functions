import React from "react";

const FormAddUser = () => {
  return (
    <div>
      <h1 className="title">Usuários</h1>
      <h2 className="subtitle">Adicionar novo usuário</h2>

      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form>
              <div className="field">
                <label className="label">Nome</label>
                <div className="control">
                  <input type="text" className="input" placeholder="Nome" />
                </div>
              </div>

              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input type="text" className="input" placeholder="Email" />
                </div>
              </div>

              <div className="field">
                <label className="label">Senha</label>
                <div className="control">
                  <input
                    type="password"
                    className="input"
                    placeholder="******"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Confirmar Senha</label>
                <div className="control">
                  <input
                    type="password"
                    className="input"
                    placeholder="******"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Função</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select>
                      <option value="admin">Admin</option>
                      <option value="user">User</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="field ">
                <div className="control">
                  <button className="button is-success">Salvar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddUser;
