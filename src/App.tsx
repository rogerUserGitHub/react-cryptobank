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
import NotFound from './views/NotFound';
import { LanguageProvider } from './context/LanguageContext';
import { SnackbarProvider } from 'notistack';
import { Container, Grid } from '@mui/material';
import ClickBar from './common/components/ClickBar';

function App() {
  return (
    <>
      <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
        <BrowserRouter>
          <LanguageProvider>
            <ClickBar />
            <NavBar />
            <SearchBar dataList={dataList} />
            <Banner />
            <Container>
              <Grid item xs={12} md={12} lg={12} marginBottom={1}>
                <img
                  src={process.env.PUBLIC_URL + '/banner.jpg'}
                  alt="banner"
                  width="100%"
                  height={180}
                  className="center"
                ></img>
              </Grid>
            </Container>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<About />} />
              <Route path="/details/:id" element={<DetailsPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </LanguageProvider>
        </BrowserRouter>
      </SnackbarProvider>
    </>
  );
}

export default App;
