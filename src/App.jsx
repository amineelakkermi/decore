import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { DetailPage, Home } from './pages';
import { Footer, Navbar, ScrollToTop } from './components';

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:category' element={<DetailPage />} /> {/* Route dynamique pour la page de détail */}
        <Route path='*' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
