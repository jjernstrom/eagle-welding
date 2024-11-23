import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { About } from './pages/About/About';
import { Contact } from './pages/Contact/Contact';
import { Gallery } from './pages/Gallery/Gallery';
import { Home } from './pages/Home/Home';
import { Services } from './pages/Services/Services';

export const App = () => {
  return (
    <Box sx={{ 
      bgcolor: 'background.default', 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Box>
  );
};