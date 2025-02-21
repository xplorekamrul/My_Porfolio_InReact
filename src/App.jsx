import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home';
import Service from './Pages/Service';
import Resume from './Pages/Resume';
import Work from './Pages/Work';
import Contact from './Pages/Contact';
import Header from './Pages/Header';
import CustomCursor from './Components/CustomCursor';

function App() {
  return (
    <div>
      <Router>
        {/* Header */}
        <Header />

        {/* Custom Cursor */}
        <CustomCursor />

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
