import './App.css';
import Home from './components/home.js';
import Navbar from './components/navbar';


function App() {
  return (

    <div className="App">
      <div className="Navbar">
        <Navbar/>
      </div>
      <div className="Body">
        <Home/>
      </div>
      

      
    </div>
  );
}

export default App;
