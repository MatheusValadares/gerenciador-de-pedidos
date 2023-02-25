import React, { useContext, useState } from "react";
import TableClients from "../clientComponents/TableClients";
import Modal from "../layout/Modal";
import FormAddClient from "../clientComponents/FormAddClient";
import FormEditClient from "../clientComponents/FormEditClient";
import DeleteConfitmation from "../clientComponents/DeleteConfirmation";
import { ClientContext } from "../clientComponents/ClientContext";

function Clientcontent() {

  const { showAdd, setShowAdd } = useContext(ClientContext);
  const { showEdit, setShowEdit } = useContext(ClientContext);
  const { showDelete, setShowDelete } = useContext(ClientContext);

  return (
    <div className="content">
      <TableClients></TableClients>
      <button className="addClient" onClick={() => { setShowAdd(true) }}>Adicionar</button>
      <Modal show={showAdd}><FormAddClient></FormAddClient></Modal>
      <Modal show={showEdit}><FormEditClient></FormEditClient></Modal>
      <Modal show={showDelete}><DeleteConfitmation></DeleteConfitmation></Modal>
    </div>
  );

}

export default Clientcontent;