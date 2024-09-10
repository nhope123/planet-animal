import { Box, SxProps, Theme } from '@mui/material';
import { FC } from 'react';

const rootSx: SxProps<Theme> = {
  height: (theme) => theme.spacing(36),
  // backgroundColor: '#3882f6' button color
};

const SignUp: FC = () => {
  
  return (
    <Box id='SignUp' sx={rootSx}>
      SignUp Place Holder
    </Box>
  );
};

export default SignUp;
