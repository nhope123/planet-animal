import { AppBar, Box, Container, IconButton, Popover, SxProps, Theme, Toolbar, Typography } from '@mui/material';
import { FC, useCallback, MouseEvent, useState} from 'react';
import logo from '../../assets/logo.png';
import { LogoSx } from './heroStyles';
import MenuList from './MenuList';
import MenuIcon from '@mui/icons-material/Menu';

const rootSx: SxProps<Theme> = {
  backgroundColor: 'inherit',
  position: 'fixed',
  boxShadow: 0,
  

};

const logoContainerSx: SxProps<Theme> = {
  display: 'flex',
  columnGap: 2,
};

const mobileMenuSx: SxProps<Theme> = {
  display: { xs: 'inline-flex', sm: 'none' },
  position: 'absolute',
  left: 2,
};
const toolbarSx: SxProps<Theme> = {
  display: 'flex',
  justifyContent: { xs: 'center', sm: 'space-between' },
};

const Header: FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleMobileMenuClick = useCallback((e: MouseEvent<HTMLButtonElement| undefined> ) => {
    setAnchorEl(e.currentTarget);
  }, []);
  
  return (
    <AppBar sx={rootSx}>
        <Container maxWidth="xl">
        <Toolbar disableGutters sx={toolbarSx}>
          <IconButton  color="inherit" aria-label="menu"  onClick={handleMobileMenuClick} sx={mobileMenuSx}>
            <MenuIcon />
          </IconButton>
          <Popover
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <MenuList sx={{ display: {xs: 'flex', sm: 'none'}, flexDirection: 'column' }} />
          </Popover>


          <Box sx={logoContainerSx}>
            <Box component={'img'} src={logo} alt="logo" style={{height: "38px"}} />
            <Typography component={'span'} sx={LogoSx}>
              {'Planet Animal'}
            </Typography>
          </Box>
          <MenuList sx={{ display: {xs: 'none', sm: 'inline-flex'}}}/>
         </Toolbar>
         </Container> 
    </AppBar>
  );
};

export default Header;
