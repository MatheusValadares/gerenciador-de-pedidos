import React, { createContext, useState } from "react";

export const LayoutContext = createContext();

export function LayoutProvider(props) {

  const [showContent, setShowContent] = useState("clients")

  return (<LayoutContext.Provider value={[showContent, setShowContent]}>
    {props.children}
  </LayoutContext.Provider>)

}