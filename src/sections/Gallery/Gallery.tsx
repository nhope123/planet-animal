import { Box, SxProps, Theme } from '@mui/material';
import { FC } from 'react';

const containerSx: SxProps<Theme> = {
  height: (theme) => theme.spacing(42),
  // backgroundColor: '#3882f6' button color
};
const Gallery: FC = () => {
  
  return (
    <Box id='Gallery' sx={containerSx}>
      Gallery Place Holder
    </Box>
  );
};

export default Gallery;
