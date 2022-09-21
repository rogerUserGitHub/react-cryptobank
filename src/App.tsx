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
import { Translation } from 'react-i18next';
import { LanguageContext, LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <DarkModeProvider>
          <LanguageProvider> 
            {/* <Translation {(t: any) => <LanguageProvider t={t} />}>  */}
          <NavBar
          // language={i18n.language.split('-')[0] as Language}
          />
          <SearchBar dataList={dataList} />
          <Banner />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/about' element={<About />} />
            <Route path='/details/:id' element={<DetailsPage />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          {/* </Translation> */}
          </LanguageProvider>
        </DarkModeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
