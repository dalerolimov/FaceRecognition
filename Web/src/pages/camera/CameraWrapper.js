import { useRef, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import IconButton from '@mui/material/IconButton';
// import Container from '@mui/material/Container';

function CameraWrapper({ dataimg }) {
  const [is_active, setIs_active] = useState(false);
  const canvasRef = useRef(null);
  const videoWidth = 1000;
  const videoHeight = 500;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (!is_active) {
          toast.success('Доступ к камере разрешено !', { position: 'top-right' });
          setIs_active(true);
        }

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
        if (!is_active) {
          toast.error(`Доступ к камере не разрешен: ${err}`, { position: 'top-right' });
          setIs_active(true);
        }
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
    const imageData = canvas.toDataURL();
    dataimg(imageData);
  };

  return (
    <>
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', marginRight: '3%', marginLeft: '3%' }}>
        <canvas ref={canvasRef} width={videoWidth} height={videoHeight} className="borderCamera"></canvas>
        <IconButton size="large" onClick={snapPhoto} style={{ position: 'absolute', bottom: '0' }}>
          <CameraAltIcon />
        </IconButton>
      </div>
    </>
  );
}

export default CameraWrapper;
