import { ButtonBase } from '@mui/material';

import Logo from './Logo';

const LogoSection = ({ sx }) => {
  return (
    <ButtonBase disableRipple sx={sx} className="logo">
      <Logo />
    </ButtonBase>
  );
};

export default LogoSection;
