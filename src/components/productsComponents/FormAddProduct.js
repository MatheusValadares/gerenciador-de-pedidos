import React, { useContext } from "react";
import { ProductContext } from "./ProductContext";

function FormAddProduct() {

  const { setShowAdd } = useContext(ProductContext);

  return (<div>
    <div className="header-form">
      <h3>Novo Produto:</h3>
      <button className="btn-close" onClick={() => { setShowAdd(false) }}>X</button>
    </div>
    <form>
      <div>
        <label for="name">Nome: </label>
        <input type="text" name="name" required></input>
      </div>
      <div>
        <label for="value">Valor: </label>
        <input type="number" name="value" min="0" step="0.01" placeholder="R$ 0,00" pattern="\d+(\,\d{2})?" required></input>
      </div>
      <div>
        <button>Criar</button>
      </div>

    </form>
  </div>)
}

export default FormAddProduct;