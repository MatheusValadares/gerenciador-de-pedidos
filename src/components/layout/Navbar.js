import React, { useContext } from "react";
import { LayoutContext } from "../LayoutContext";

function Navbar() {

  const [showContent, setShowContent] = useContext(LayoutContext);

  return (
    <ul className="navbar">
      <li className={showContent === 'dashboard' ? "navbar-link active" : "navbar-link"} onClick={() => { setShowContent('dashboard') }}>Dashboard</li>
      <li className={showContent === 'orders' ? "navbar-link active" : "navbar-link"} onClick={() => { setShowContent('orders') }}>Pedidos</li>
      <li className={showContent === 'products' ? "navbar-link active" : "navbar-link"} onClick={() => { setShowContent('products') }}>Produtos</li>
      <li className={showContent === 'clients' ? "navbar-link active" : "navbar-link"} onClick={() => { setShowContent('clients') }} >Clientes</li>
      <li className={showContent === 'historic' ? "navbar-link active" : "navbar-link"} onClick={() => { setShowContent('historic') }}>Histórico</li>
    </ul>
  )
}

export default Navbar;