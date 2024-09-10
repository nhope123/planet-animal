import { Box, SxProps, Theme, Typography } from '@mui/material';
import { FC } from 'react';

const FOOTER = 'Copyright © Planet Animal 2024';
const footerSx: SxProps<Theme> = {
  alignItems: 'center',
  backgroundColor: '#1f2937',
  color: '#F9FAF8',
  display: 'flex',
  height: (theme) => theme.spacing(8),
  justifyContent: 'center',
};
const Footer: FC = () => {
  
  return (
   <Box id='footer' sx={footerSx}>
    <Typography variant="caption" align="center" gutterBottom>{FOOTER}</Typography>
   </Box>
  );
};

export default Footer;
