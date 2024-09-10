import { Box, SxProps, Theme } from '@mui/material';
import './App.css';
import Footer from './sections/Footer';
import Gallery from './sections/Gallery/Gallery';
import Hero from './sections/Hero/Hero';
import SignUp from './sections/SignUp';
import Testimonial from './sections/Testimonial';

const containerSx: SxProps<Theme> = {
  height: '100vh',
  width: '100vw',
};

const App = () => {

  return (
    <Box sx={containerSx}>
      <Hero />
      <Gallery />
      <Testimonial />
      <SignUp />
      <Footer />
    </Box>
  )
}

export default App
