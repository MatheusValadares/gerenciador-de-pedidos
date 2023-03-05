import React, { useContext } from 'react';
import FormAddProduct from "../productComponents/FormAddProduct";
import TableProducts from "../productComponents/TableProducts";
import Modal from "../layout/Modal";
import FormEditProduct from "../productComponents/FormEditProduct";
import DeleteConfirmationProduct from "../productComponents/DeleteConfirmationProduct";
import { ProductContext } from '../productComponents/ProductContext';

function ProductsContent(props) {

  const { showAdd, setShowAdd } = useContext(ProductContext);
  const { showEdit } = useContext(ProductContext);
  const { showDelete } = useContext(ProductContext);

  return (
    <div className="content">
      <TableProducts></TableProducts>
      <div>
        <button className="btn-add" onClick={() => { setShowAdd(true) }}>Adicionar</button>
      </div>
      <Modal show={showAdd}><FormAddProduct></FormAddProduct></Modal>
      <Modal show={showEdit}><FormEditProduct></FormEditProduct></Modal>
      <Modal show={showDelete}><DeleteConfirmationProduct></DeleteConfirmationProduct></Modal>

    </div >
  )
}

export default ProductsContent;