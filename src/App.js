import './App.css';
import Header from './components/layout/Header';
import Clientcontent from "./components/contents/Clientcontent";
import { ClientProvider } from './components/clientComponents/ClientContext';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ClientProvider>
        <Clientcontent></Clientcontent>
      </ClientProvider>
    </div>
  );
}

export default App;
