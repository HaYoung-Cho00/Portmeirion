import './App.css';
import Header from './include/Header';
import Footer from './include/Footer';
import Main from './main/main-index';
import ViewLists from './products/view-lists-index';
import Login from './login/Login';
import Lists from './shoppingLists/Lists';

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <Main></Main> */}
      {/* <ViewLists></ ViewLists> */}
      {/* <Login></Login> */}
      <Lists></Lists>
      <Footer></Footer>
    </div>
  );
}

export default App;
