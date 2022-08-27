import './App.css';
import Switch from './common/components/Switch';
import NavBar from './common/components/NavBar';
import Homepage from './views/Homepage';
import About from './views/About';
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
    {/* <Homepage /> */}
    <BrowserRouter>  
    <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </BrowserRouter> 


    </>

  );
}

export default App;
