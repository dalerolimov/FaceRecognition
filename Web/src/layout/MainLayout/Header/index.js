import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { useTheme } from '@mui/material/styles';
import { AppBar, IconButton, Toolbar, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';

import AppBarStyled from './AppBarStyled';
import HeaderContent from './HeaderContent';
import { modalCreateOpen } from '../../../store/reducers/modal/modalUser';

import { MenuFoldOutlined, MenuUnfoldOutlined, PlusSquareOutlined } from '@ant-design/icons';

const Header = ({ open, handleDrawerToggle }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));

  const iconBackColor = 'grey.100';
  const iconBackColorOpen = 'grey.200';

  const mainHeader = (
    <>
      <Toolbar className="header">
        <Box>
          <IconButton
            disableRipple
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
            color="secondary"
            sx={{ color: 'text.primary', bgcolor: open ? iconBackColorOpen : iconBackColor, ml: { xs: 0, lg: -2 } }}
          >
            {!open ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </IconButton>
          <IconButton
            sx={{
              ml: 1
            }}
            onClick={() => dispatch(modalCreateOpen())}
          >
            <PlusSquareOutlined />
          </IconButton>
        </Box>
        <Box>
          <HeaderContent />
        </Box>
      </Toolbar>
    </>
  );

  const appBar = {
    position: 'fixed',
    color: 'inherit',
    elevation: 0,
    sx: {
      borderBottom: `1px solid ${theme.palette.divider}`
    }
  };

  return (
    <>
      {!matchDownMD ? (
        <AppBarStyled open={open} {...appBar}>
          {mainHeader}
        </AppBarStyled>
      ) : (
        <AppBar {...appBar}>{mainHeader}</AppBar>
      )}
    </>
  );
};

Header.propTypes = {
  open: PropTypes.bool,
  handleDrawerToggle: PropTypes.func
};

export default Header;
