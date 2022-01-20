import './App.css';
import Header from './include/Header';
import Footer from './include/Footer';
import Main from './main/main-index';
import ViewLists from './products/view-lists-index';
import Login from './login/Login';
import Lists from './shoppingLists/Lists';
import { Routes, Route } from 'react-router-dom'
import SignUp from './login/SignUp';
import ProductDetailView from './include/ProductDetailView';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/new' element={<ViewLists title='New Arrivals'/>} />
        <Route path='/collection' element={<ViewLists title='Collections'/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Lists />} />
        <Route path='/login/signup' element={<SignUp />} />
        <Route path='/product/:id' element={<ProductDetailView />} />
      </Routes>
        {/* <ProductDetailView /> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
