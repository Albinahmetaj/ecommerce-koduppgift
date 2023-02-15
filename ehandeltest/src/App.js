import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Startpage from './components/api/Startpage';
import Electronics from './components/api/Products/Electronics';
import Jewelery from './components/api/Products/Jewelery';
import MensClothing from './components/api/Products/MensClothing';
import WomensClothing from './components/api/Products/WomensClothing';
import ProductList from './components/api/Products/ProductList';
import { Provider } from 'react-redux';
import store from './components/api/redux/store';
import Shoppingcart from './components/api/shoppingcart/shoppingcart';
import Checkout from './components/api/shoppingcart/checkout';
import Confirmorder from './components/api/shoppingcart/confirmOrder';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
    <Route path="/confirmorder" element={<Confirmorder/>}/>
    <Route path="/checkout" element={<Checkout/>}/>
    <Route path="/cart" element={<Shoppingcart/>}/>
    <Route path="/all" element={<ProductList />}/>
    <Route path="/women" element={<WomensClothing />}/>
    <Route path="/men" element={<MensClothing />}/>
    <Route path="/jewelery" element={<Jewelery />}/>
    <Route path="/electronics" element={<Electronics />}/>
    <Route path="/products" element={<ProductList />}/>
    <Route path="/" element={<Startpage />}/>
    </Routes>
    </BrowserRouter>
    </Provider>
    
  );
}

export default App;
