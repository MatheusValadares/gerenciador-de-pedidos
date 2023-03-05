import React, { useContext } from "react";
import ClientContent from "../contentsComponents/ClientContent";
import { ClientProvider } from '../clientComponents/ClientContext';
import ProductContent from '../contentsComponents/ProductContent';
import { ProductProvider } from '../productComponents/ProductContext';
import { LayoutContext } from "../LayoutContext";

function Content(props) {

  const [showContent] = useContext(LayoutContext);

  switch (showContent) {
    case 'dashboard':
      return (<div>
        dashboard
      </div>)

    case 'orders':
      return (<div>
        orders
      </div>)

    case 'products':
      return (<div>
        <ProductProvider>
          <ProductContent></ProductContent>
        </ProductProvider>
      </div>)

    case 'clients':
      return (<div>
        <ClientProvider>
          <ClientContent></ClientContent>
        </ClientProvider>
      </div>)

    case 'historic':
      return (<div>
        historic
      </div>)

    default:
      return (<div>
        dashboard
      </div>)
  }

}

export default Content;