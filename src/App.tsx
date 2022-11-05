import './App.css';
import NavBar from './common/components/NavBar';
import Homepage from './views/homepage/Home';
import About from './views/aboutpage/About';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailsPage from './views/detailspage/Details';
import Banner from './common/components/Banner';
import SearchBar from './common/components/SearchBar';
import dataList from './common/utils/Datalist';
import { DarkModeProvider } from './context/DarkModeContext';
import NotFound from './views/NotFound';
import { LanguageProvider } from './context/LanguageContext';
import { SnackbarProvider } from 'material-ui-snackbar-provider';
import Footer from './common/components/Footer';

function App() {
  return (
    <>
      <SnackbarProvider SnackbarProps={{ autoHideDuration: 3000 }}>
        <BrowserRouter>
          <DarkModeProvider>
            <LanguageProvider>
              <NavBar />
              <SearchBar dataList={dataList} />
              <Banner />
              <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/about' element={<About />} />
                <Route path='/details/:id' element={<DetailsPage />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </LanguageProvider>
          </DarkModeProvider>
        </BrowserRouter>
      </SnackbarProvider>
    </>
  );
}

export default App;
