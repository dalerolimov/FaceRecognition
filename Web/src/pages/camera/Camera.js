import CameraWrapper from './CameraWrapper';
import Logo from '../../components/Logo/index';
import Box from '@mui/material/Box';
import DataOpenPhoto from './dataOpenPhoto';
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import api from '../../data/faceRecognition/index';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { onDisabledButton } from '../../store/reducers/camera/index';

function Camera() {
  const [dataPeople, setDataPeople] = useState();
  const [isActiveLoading, setisActiveLoading] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const dataimg = (imageData) => {
    setLoading(false);
    api
      .faceRecognition(imageData)
      .then((res) => {
        toast.success('Фото сделано!', { position: 'top-right' });
        setDataPeople(res.data);
        setisActiveLoading(true);
        setLoading(true);
      })
      .catch(() => {
        toast.error('Сделайте фото заново', { position: 'top-right' });
      })
      .finally(() => {
        setLoading(true);
        dispatch(onDisabledButton());
      });
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
            sx={{
              mr: 40,
              mt: 30
            }}
          >
            <CircularProgress />
          </Box>
        )}
      </Box>
    </>
  );
}

export default Camera;
