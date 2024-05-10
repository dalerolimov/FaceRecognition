import api from 'data/axios';

export default {
  faceRecognition(image) {
    let images = image.replace('data:image/jpeg;base64,', '');
    const formData = new FormData();
    formData.append('image', images);
    return api.post(`FaceRecognition/Recognize`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }
};
