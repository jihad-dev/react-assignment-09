import logo from './logo.svg';
import './App.css';
import NavbarExample from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';


function App() {
  return (
    <div className="App">
      <NavbarExample></NavbarExample>
      <Header></Header>
      <Home></Home>
    </div>
  );
}

export default App;
