import TableClients from "../clientComponents/TableClients";
import Modal from "../layout/Modal";
import FormAddClient from "../clientComponents/FormAddClient";

function Clientcontent() {

  return (
    <div className="content">
      <TableClients></TableClients>
      <button className="addClient">Adicionar</button>
      <Modal><FormAddClient></FormAddClient></Modal>
    </div>
  );

}

export default Clientcontent;