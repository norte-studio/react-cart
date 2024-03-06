import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);

  const onProductAdded = (product) => {
    const existingProduct = items.find(item => item.id === product.id);
    if(existingProduct) {
      setItems(items.map(item => {
        if(item === existingProduct) {
         return {...item, quantity: item.quantity + 1}  
        }
        else return item;
      }))
    }
    else setItems([...items, {...product, quantity: 1}])
  };
  
  const onItemDeleted = (product) => {
    setItems(items.filter(item => item !== product))
  };

  const onQuantityChanged = (product, quantity) => {
    setItems(items.map(item => {
      if(item === product) {
       return {...item, quantity}  
      }
      else return item;
    }))
  };

  return (
    <div className="App">
      <ProductList onProductAdded = {onProductAdded}/>
      <Cart items = {items} onItemDeleted={onItemDeleted} onQuantityChanged={onQuantityChanged}/>
    </div>
  );
}

export default App;
