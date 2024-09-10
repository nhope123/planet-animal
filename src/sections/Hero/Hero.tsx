import { Box, SxProps, Theme, Typography } from '@mui/material';
import { FC } from 'react';
import Header from './Header';
import { containerSx, HeroMainSx, HeroSecondarySx } from './heroStyles';
const contentSx: SxProps<Theme> = {
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100%',
  width: '100%',
  padding: '0 20px',
  gap: 2,
  
};

const imageSx: SxProps<Theme> = {
  width: '100%',
};

const contentSectionSx: SxProps<Theme> = {
  width: { xs: '100%', md: '50%' },
  height: { xs: '50%', md: '100%' },
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const PRIMARY_TEXT = 'Discover the Wild';
const SECONDARY_TEXT = 'Explore wildlife, learn, and protect our planet’s incredible creatures.';
const HERO_IMAGE = 'https://images.unsplash.com/photo-1504173010664-32509aeebb62?q=80&w=2254&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const Hero: FC = () => {
  
  return (
    <Box id='Home' sx={containerSx}>
      <Header />
      <Box sx={contentSx}>
        <Box sx={contentSectionSx}>
          <Typography sx={HeroMainSx}>{PRIMARY_TEXT}</Typography>
          <Typography sx={HeroSecondarySx}>{SECONDARY_TEXT}</Typography>
        </Box>
        <Box sx={contentSectionSx}>
          <Box alt='hero pic' component={'img'} src={HERO_IMAGE} sx={imageSx} />
        </Box>
         
      </Box>
    </Box>
  );
};

export default Hero;
