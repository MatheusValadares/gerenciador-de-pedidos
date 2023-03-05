import React, { useContext } from "react";
import { ProductContext } from "./ProductContext";


function TableProducts() {

  const { setShowEdit } = useContext(ProductContext);
  const { setShowDelete } = useContext(ProductContext);

  let dados = [
    { name: "nome", value: "R$ 100,25" },
    { name: "nome", value: "R$ 100,25" },
    { name: "nome", value: "R$ 100,25" },
    { name: "nome", value: "R$ 100,25" },
    { name: "nome", value: "R$ 100,25" },
    { name: "nome", value: "R$ 100,25" },
    { name: "nome", value: "R$ 100,25" },
    { name: "nome", value: "R$ 100,25" },
    { name: "nome", value: "R$ 100,25" },
    { name: "nome", value: "R$ 100,25" },
  ]

  return (<div className="table-overflow">
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>valor</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody >
        {dados.map((linha, index) => (
          <tr key={index}>
            <td>{linha.name}</td>
            <td>{linha.value}</td>
            <td>
              <button className="btn-edit" onClick={() => { setShowEdit(true) }}>Editar</button>
              <button className="btn-delete" onClick={() => { setShowDelete(true) }}>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>)
}

export default TableProducts;