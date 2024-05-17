import { useRef, useEffect } from 'react';
import { toast } from 'react-toastify';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import IconButton from '@mui/material/IconButton';
import { useSelector, useDispatch } from 'react-redux';
import { disabledButton } from '../../store/reducers/camera/index';

function CameraWrapper({ dataimg }) {
  const { is_active } = useSelector((store) => store.camera);
  const canvasRef = useRef(null);
  const videoWidth = 1000;
  const videoHeight = 500;
  const dispatch = useDispatch();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        toast.success('Доступ к камере разрешено !', { position: 'top-right' });
        const video = document.createElement('video');
        video.srcObject = stream;
        video.onloadedmetadata = () => {
          video.width = videoWidth;
          video.height = videoHeight;
          video.play();
          drawVideo(video, ctx, videoWidth, videoHeight);
        };
      })
      .catch((err) => {
        toast.error(`Доступ к камере не разрешен: ${err}`, { position: 'top-right' });
      });

    return () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, []);

  const drawVideo = (video, ctx, width, height) => {
    ctx.drawImage(video, 0, 0, width, height);
    requestAnimationFrame(() => drawVideo(video, ctx, width, height));
  };

  const snapPhoto = () => {
    const canvas = canvasRef.current;
    dispatch(disabledButton());

    // canvas.toBlob((blob) => {
    //   const img = new Image();
    //   img.src = URL.createObjectURL(blob);
    //   dataimg(img);
    // }, 'image/jpeg');

    const imageData = canvas.toDataURL('image/jpeg');
    console.log(imageData);
    dataimg(imageData);
  };

  return (
    <>
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', marginRight: '3%', marginLeft: '3%' }}>
        <canvas ref={canvasRef} width={videoWidth} height={videoHeight} className="borderCamera"></canvas>
        <IconButton disabled={is_active} size="large" onClick={snapPhoto} style={{ position: 'absolute', bottom: '0' }}>
          <CameraAltIcon />
        </IconButton>
      </div>
    </>
  );
}

export default CameraWrapper;
