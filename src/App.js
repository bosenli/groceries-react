
import './App.css';
import Product from './components/Product';
import { data } from "./components/Products";

function App() {
  const productList = data;
  return (
    <div className="App">
      <Product productList={productList} />
    </div>
  );
}

export default App;
