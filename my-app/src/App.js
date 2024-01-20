import './App.css';
import Home from './components/home.js';
import About from './components/about/about.js';
import Navbar from './components/navbar.js';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="Navbar">
          <Navbar />
        </div>
        <div className="Body">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
