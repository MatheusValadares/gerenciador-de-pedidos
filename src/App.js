import './App.css';
import Header from './components/layout/Header';
import Content from './components/contentsComponents/Content';
import { LayoutProvider } from './components/LayoutContext';

function App() {
  return (
    <div className="App">

      <LayoutProvider>
        <Header></Header>
        <Content></Content>
      </LayoutProvider>


    </div>
  );
}

export default App;
