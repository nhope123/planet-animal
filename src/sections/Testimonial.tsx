import { Box, SxProps, Theme } from '@mui/material';
import { FC } from 'react';

const rootSx: SxProps<Theme> = {
  height: (theme) => theme.spacing(36),
  backgroundColor: '#e5e7eb',
};
const Testimonial: FC = () => {
  
  return (
    <Box id='Testimonial' sx={rootSx}>
      Testimonial Place Holder
    </Box>
  );
};

export default Testimonial;
