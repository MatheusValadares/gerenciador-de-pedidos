import TableClients from "../clientComponents/TableClients";
import Modal from "../layout/Modal";
import FormAddClient from "../clientComponents/FormAddClient";
import FormEditClient from "../clientComponents/FormEditClient";
import DeleteConfitmation from "../clientComponents/DeleteConfirmation";

function Clientcontent() {

  return (
    <div className="content">
      <TableClients></TableClients>
      <button className="addClient">Adicionar</button>
      <Modal><FormAddClient></FormAddClient></Modal>
      <Modal><FormEditClient></FormEditClient></Modal>
      <Modal><DeleteConfitmation></DeleteConfitmation></Modal>
    </div>
  );

}

export default Clientcontent;