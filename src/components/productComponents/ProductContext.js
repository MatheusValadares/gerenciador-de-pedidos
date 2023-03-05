import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export function ProductProvider(props) {

  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const states = { showAdd, setShowAdd, showEdit, setShowEdit, showDelete, setShowDelete };

  return (
    <ProductContext.Provider value={states}>
      {props.children}
    </ProductContext.Provider>
  )

}