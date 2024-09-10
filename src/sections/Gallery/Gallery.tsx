import { Box, SxProps, Theme, Typography } from '@mui/material';
import { FC } from 'react';
import Carousel from 'react-multi-carousel';
import GalleryCard, { GalleryCardProps } from './GalleryCard';

const containerSx: SxProps<Theme> = {
  height: (theme) => theme.spacing(42),
  // backgroundColor: '#3882f6' button color
};

const cardItems: GalleryCardProps[] = [
  {
    image: {
      src: 'https://via.placeholder.com/150',
      alt: 'placeholder',
    },
    title: 'Title 1',
    description: 'Description 1',
  },
  {
    image: {
      src: 'https://via.placeholder.com/150',
      alt: 'placeholder',
    },
    title: 'Title 2',
    description: 'Description 2',
  },
  {
    image: {
      src: 'https://via.placeholder.com/150',
      alt: 'placeholder',
    },
    title: 'Title 3',
    description: 'Description 3',
  },
  {
    image: {
      src: 'https://via.placeholder.com/150',
      alt: 'placeholder',
    },
    title: 'Title 4',
    description: 'Description 4',
  },
  {
    image: {
      src: 'https://via.placeholder.com/150',
      alt: 'placeholder',
    },
    title: 'Title 5',
    description: 'Description 5',
  },
  {
    image: {
      src: 'https://via.placeholder.com/150',
      alt: 'placeholder',
    },
    title: 'Title 6',
    description: 'Description 6',
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};


const Gallery: FC = () => {
  
  return (
    <Box id='Gallery' sx={containerSx}>
      <Typography variant='h2'>Gallery</Typography>
      <Box>
        <Carousel responsive={responsive}>
          {
            cardItems.map((item, index) => (
              <GalleryCard 
                key={index} 
                image={item.image} 
                title={item.title}
                description={item.description}
              />
            ))
          }
        </Carousel>

      </Box>
      Gallery Place Holder
    </Box>
  );
};

export default Gallery;
