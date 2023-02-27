import './App.css';
import Header from './components/layout/Header';
import ClientContent from "./components/contents/ClientContent";
import { ClientProvider } from './components/clientComponents/ClientContext';
import ProductContent from './components/contents/ProductContent';
import { ProductProvider } from './components/productsComponents/ProductContext';

function App() {
  return (
    <div className="App">
      <Header></Header>

      {/* <ClientProvider>
        <ClientContent></ClientContent>
      </ClientProvider> */}

      <ProductProvider>
        <ProductContent></ProductContent>
      </ProductProvider>


    </div>
  );
}

export default App;
