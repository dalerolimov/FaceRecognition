import PropTypes from 'prop-types';


import { Box} from '@mui/material';

import AuthCard from './AuthCard';
import Logo from 'components/Logo';


const AuthWrapper = ({ children }) => (
  <div>
    <Logo/>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 10
      }}
      >
      <AuthCard className='login'>{children}</AuthCard>
    </Box>
</div>
);

AuthWrapper.propTypes = {
  children: PropTypes.node
};

export default AuthWrapper;
