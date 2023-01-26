import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from'./Components/Home'
import About from'./Components/About';


function App() {
  return (
    <div className="App">
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
