import React, { createContext, useState } from "react";

export const ClientContext = createContext();

export function ClientProvider(props) {

  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const states = { showAdd, setShowAdd, showEdit, setShowEdit, showDelete, setShowDelete };

  return (
    <ClientContext.Provider value={states}>
      {props.children}
    </ClientContext.Provider>
  )
}