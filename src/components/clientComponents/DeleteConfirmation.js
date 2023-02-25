import React, { useContext } from "react";
import { ClientContext } from "./ClientContext";

function DeleteConfitmation() {

  const { setShowDelete } = useContext(ClientContext);

  return (<div>
    <h3>Você tem certeza que deseja excluir *nomeDoCliente*?</h3>
    <button >Sim</button>
    <button className="btn-delete" onClick={() => { setShowDelete(false) }}>Cancelar</button>
  </div>)
}

export default DeleteConfitmation;