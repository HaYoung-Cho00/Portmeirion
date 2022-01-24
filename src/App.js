import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './include/Header';
import Footer from './include/Footer';
import Main from './main/Main';
import ProductLists from './include/ProductLists';
import Login from './login/Login';
import Cart from './cart/Cart';
import SignUp from './login/SignUp';
import ProductDetailView from './include/ProductDetailView';
import NewIndex from './newArrivals/NewIndex';
import CollectionLists from './collections/CollectionLists';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/new' element={<NewIndex />} />
        <Route path='/collection' element={<CollectionLists title='Collections'/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login/signup' element={<SignUp />} />
        <Route path='/product/:id' element={<ProductDetailView />} />
        <Route path='/detailView' element={<ProductDetailView />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
