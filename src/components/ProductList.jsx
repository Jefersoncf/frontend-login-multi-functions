import React from "react";

const ProductList = () => {
  return (
    <div>
      <h1 className="title">Produtos</h1>
      <h2 className="subtitle">Lista de Produtos</h2>

      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>ID</th>
            <th>PRODUTO</th>
            <th>PREÇO</th>
            <th>CRIADO EM</th>
            <th>AÇÃO</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
