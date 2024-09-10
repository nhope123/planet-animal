import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { SxProps, Theme } from '@mui/material/styles';
import { FC } from 'react';

interface MenuItemProps {
  sx: SxProps<Theme>;
}

const rootSx: SxProps<Theme> = {
  color: '#E5E7EB',
  display: 'flex',
  flexDirection: { xs: 'column', sm: 'row' },
};
const menuItems = [
  { id: 1, name: 'Home' },
  { id: 2, name: 'Gallery' },
  { id: 3, name: 'Testimonial' },
  { id: 4, name: 'SignUp' },
];

const MenuList: FC<MenuItemProps> = (props) => {
  const { sx } = props;
  
  return (
    <List sx={{...rootSx, ...sx}}>
      {
        menuItems.map((item) => (
          <ListItem component={'a'} href={`#${item.name}`} key={item.id}>
            <ListItemText primary={item.name} />
          </ListItem> 
        ))
      }
    </List>
  );
};

export default MenuList;
