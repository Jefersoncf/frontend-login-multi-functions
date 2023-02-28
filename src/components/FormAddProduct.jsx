import React from "react";

const FormAddProduct = () => {
  return (
    <div>
      <h1 className="title">Produtos</h1>
      <h2 className="subtitle">Adicionar novo Produto</h2>

      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form>
              <div className="field">
                <label className="label">Nome</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder="Nome do Produto"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Preço</label>
                <div className="control">
                  <input type="text" className="input" placeholder="Preço" />
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

export default FormAddProduct;
