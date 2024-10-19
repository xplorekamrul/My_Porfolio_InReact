import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import Service from './Pages/Service';
import Resume from './Pages/Resume';
import Work from './Pages/Work';
import Contact from './Pages/Contact';
import Header from './Pages/Header';
import CustomCursor from './Components/CustomCursor';

function App() {
  return (
    <>
      <Router>
        <Header />
        {/* Define routes */}
        <CustomCursor />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
