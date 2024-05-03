import CameraWrapper from './CameraWrapper';
import Logo from '../../components/Logo/index';
import Box from '@mui/material/Box';
import DataOpenPhoto from './dataOpenPhoto';
import { useState } from 'react';

function Camera() {
  const [dataPeople, setDataPeople] = useState([{ name: 'Khusrav' }]);

  const dataimg = (imageData) => {
    setDataPeople([{ name: 'Khusrav' }]);
    console.log(imageData);
  };
  return (
    <>
      <Logo />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mt: 5
        }}
      >
        <CameraWrapper dataimg={dataimg} />
        <DataOpenPhoto dataPeople={dataPeople} />
      </Box>
    </>
  );
}

export default Camera;
