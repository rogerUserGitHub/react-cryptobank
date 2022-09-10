import './App.css';
import Switch from './common/components/Switch';
import NavBar from './common/components/NavBar';
import Homepage from './views/homepage/Home';
import About from './views/aboutpage/About';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailsPage from './views/detailspage/Details';
import { Details } from '@mui/icons-material';
import Banner from './common/components/Banner';

function App() {
  return (
    <>
      {/* <Homepage /> */}
      <BrowserRouter>
        {/* <Route path="/detail/:id" element={<DetailsPage />} /> */}
        <NavBar />
        <Banner />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<About />} />
          <Route path='/details/:id' element={<DetailsPage />} />
          <Route
            path='*'
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
