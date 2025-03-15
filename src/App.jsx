import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home';
import Service from './Pages/Service';
import Resume from './Pages/Resume';
import Work from './Pages/Work';
import Contact from './Pages/Contact';
import Header from './Pages/Header';
import CustomCursor from './Components/CustomCursor';
import BackToTopButton from './Components/backToTop';

function App() {
  return (
    <div>
      <Router>
        {/* Header */}
        <Header />

        {/* Custom Cursor */}
        <CustomCursor />
        <BackToTopButton/>
        {/* Sections */}
        <Home />
        <Service />
        <Resume />
        <Work />
        <Contact />
      </Router>
    </div>
  );
}

export default App;
