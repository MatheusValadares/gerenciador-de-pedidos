import React, { useContext } from "react";
import TableClients from "../clientComponents/TableClients";
import Modal from "../layout/Modal";
import FormAddClient from "../clientComponents/FormAddClient";
import FormEditClient from "../clientComponents/FormEditClient";
import DeleteConfitmationClient from "../clientComponents/DeleteConfirmationClient";
import { ClientContext } from "../clientComponents/ClientContext";

function ClientContent() {

  const { showAdd, setShowAdd } = useContext(ClientContext);
  const { showEdit } = useContext(ClientContext);
  const { showDelete } = useContext(ClientContext);

  return (
    <div className="content">
      <TableClients></TableClients>
      <button className="addClient" onClick={() => { setShowAdd(true) }}>Adicionar</button>
      <Modal show={showAdd}><FormAddClient></FormAddClient></Modal>
      <Modal show={showEdit}><FormEditClient></FormEditClient></Modal>
      <Modal show={showDelete}><DeleteConfitmationClient></DeleteConfitmationClient></Modal>
    </div>
  );

}

export default ClientContent;