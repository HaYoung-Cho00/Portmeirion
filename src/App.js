import './App.css';
import Header from './include/Header';
import Footer from './include/Footer';
import Main from './main/main-index';
import ViewLists from './products/view-lists-index';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      {/* <ViewLists></ViewLists> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
