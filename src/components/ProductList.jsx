import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:4000/products");
    setProducts(response.data);
  };

  const deleteProduct = async (productId) => {
    await axios.delete(`http://localhost:4000/products/${productId}`);
  };

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
          {products.map((product, index) => (
            <tr key={product.uuid}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.user.name}</td>
              <td>
                <Link
                  to={`/products/edit/${product.uuid}`}
                  className="button is-small is-info"
                >
                  Editar
                </Link>
                <button
                  onClick={() => deleteProduct(product.uuid)}
                  className="button is-small is-danger"
                >
                  Apagar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
