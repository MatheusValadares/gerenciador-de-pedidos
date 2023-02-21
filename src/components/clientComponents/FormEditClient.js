
function FormEditClient() {
  return (<div>
    <div className="header-form">
      <h3>Editar Cliente:</h3>
      <button className="btn-close">X</button>
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