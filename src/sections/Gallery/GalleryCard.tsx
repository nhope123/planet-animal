import { CardActionArea, CardContent, CardMedia, SxProps, Theme, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import React from 'react';

export interface GalleryCardProps {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
  
}

const rootSx: SxProps<Theme> = {
  display: { xs: 'block', sm: 'inline-block' },
};
const GalleryCard = (props: GalleryCardProps) => {
  const {image, description, title } = props;
  return (
    <Card sx={rootSx}>
      <CardActionArea>
        <CardMedia  component='img' image={image.src} alt={image.alt} />
        <CardContent>
          <Typography variant='h5'>{title}</Typography>
          <Typography variant='body2'>{description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default GalleryCard;