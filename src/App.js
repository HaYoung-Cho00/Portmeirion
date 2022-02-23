import './App.css';
import './reset.css';
import { Routes, Route } from 'react-router-dom'
import Header from './include/Header';
import Footer from './include/Footer';
import Main from './main/Main';
import Login from './login/Login';
import Cart from './cart/Cart';
import SignUp from './login/SignUp';
import ProductDetailView from './include/ProductDetailView';
import NewIndex from './newArrivals/NewIndex';
import CollectionLists from './collections/CollectionLists';
import CollectionIndex from './collections/CollectionIndex';
import { createContext,useState } from "react";

function App() {
  const [ cartNum, setCartNum ] = useState("cart");
  const toggleCart = () => setCartNum(cartNum => cartNum === "cart"? "value" : "cart");
  
  const CartContext = createContext("en");
  
  return (
    <CartContext.Provider value={cartNum}>
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/new' element={<NewIndex />} />
        <Route path='/collections' element={<CollectionLists title='Collections'/>} />
        <Route path='/collection/:name' element={<CollectionIndex title='Collections'/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login/signup' element={<SignUp />} />
        <Route path='/product/:id' element={<ProductDetailView toggleCart={toggleCart} />} />
        <Route path='/detailView/:id&:collectionParam' element={<ProductDetailView toggleCart={toggleCart} />} />
      </Routes>
      <Footer></Footer>
    </div>
    </CartContext.Provider>
  );
}

export default App;
