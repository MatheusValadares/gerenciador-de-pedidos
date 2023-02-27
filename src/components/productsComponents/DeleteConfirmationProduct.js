import React, { useContext } from "react";
import { ProductContext } from "./ProductContext";

function DeleteConfitmationProduct() {

  const { setShowDelete } = useContext(ProductContext);

  return (<div>
    <h3>Você tem certeza que deseja excluir *nomeDoProduto*?</h3>
    <button >Sim</button>
    <button className="btn-delete" onClick={() => { setShowDelete(false) }}>Cancelar</button>
  </div>)
}

export default DeleteConfitmationProduct;