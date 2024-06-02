import CameraWrapper from './CameraWrapper';
import Logo from '../../components/Logo/index';
import Box from '@mui/material/Box';
import DataOpenPhoto from './dataOpenPhoto';
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

function Camera() {
  const [dataPeople, setDataPeople] = useState([]);
  const [isActiveLoading, setisActiveLoading] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const dataimg = (imageData) => {
    setLoading(false);
    setTimeout(() => {
      setisActiveLoading(true);
      setDataPeople([{ name: 'Khusrav' }]);
      console.log(imageData);
      setLoading(true);
    }, 3000);
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
        {isLoading === true ? (
          isActiveLoading === true ? (
            <DataOpenPhoto dataPeople={dataPeople} />
          ) : (
            ''
          )
        ) : (
          <Box
          // sx={{ display: 'flex' }}
          >
            <CircularProgress />
          </Box>
        )}
      </Box>
    </>
  );
}

export default Camera;
