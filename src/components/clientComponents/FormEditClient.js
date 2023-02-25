import React, { useContext } from "react";
import { ClientContext } from "./ClientContext";

function FormEditClient() {

  const { showEdit, setShowEdit } = useContext(ClientContext);

  return (<div>
    <div className="header-form">
      <h3>Editar Cliente:</h3>
      <button className="btn-close" onClick={() => { setShowEdit(false) }}>X</button>
    </div>
    <form>
      <div>
        <label for="account">Conta: </label>
        <input type="number" name="account" required></input>
      </div>
      <div>
        <label for="name">Nome: </label>
        <input type="text" name="name" required></input>
      </div>
      <div>
        <button>Editar</button>
      </div>

    </form>
  </div>)
}

export default FormEditClient;