
function TableClients() {

  let dados = [
    { numeroConta: 50, nome: "teste" },
    { numeroConta: 50, nome: "teste" },
    { numeroConta: 50, nome: "teste" },
    { numeroConta: 50, nome: "teste" },
    { numeroConta: 50, nome: "teste" },
    { numeroConta: 50, nome: "teste" },
    { numeroConta: 50, nome: "teste" },
    { numeroConta: 50, nome: "teste" },
    { numeroConta: 50, nome: "teste" },
    { numeroConta: 50, nome: "teste" },
    { numeroConta: 50, nome: "teste" },
    { numeroConta: 50, nome: "teste" },
    { numeroConta: 50, nome: "teste" },
    { numeroConta: 50, nome: "teste" },
    { numeroConta: 50, nome: "teste" },
    { numeroConta: 50, nome: "teste" },
  ]

  return (<div className="table-overflow">
    <table>
      <thead>
        <tr>
          <th>Número de Conta</th>
          <th>Nome</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody >
        {dados.map((linha, index) => (
          <tr key={index}>
            <td>{linha.numeroConta}</td>
            <td>{linha.nome}</td>
            <td>
              <button className="btn-edit">Editar</button>
              <button className="btn-delete">Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>)
}

export default TableClients;