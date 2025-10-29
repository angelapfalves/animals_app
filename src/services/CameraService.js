import {  Share } from 'react-native';
import api from './api';
import { launchCamera } from 'react-native-image-picker';

const CameraService = {

   sharePhoto : (photo) => {
    if (!photo) return;
    Share.share({ message: 'Look at this cool animal!', url: photo });
  },

  searchPhotos :async (query) => {
    if (!query) return null;
    try {
      const response = await api.get('/search/photos', {
        params: { query: query, per_page: 10 },
      });
      return response.data.results[Math.floor(Math.random() * 10)]|| null;
    } catch (error) {
      console.error('Erro ao buscar imagem:', error.message);
      return null;
    } 
  },

    handleSearch : async (setPhoto , query) => {
    const photo = await CameraService.searchPhotos(query);
    if (photo) {
      setPhoto(photo.urls.small);
    }
  },

  
  
      handleCameraResponse:(response, setPhoto)=> {
          if (!response) {
              console.warn('launchCamera returned undefined');
              return;
          }
  
          if (response.didCancel) {
              console.log('User cancelled camera');
              return;
          }
  
          if (response.errorCode) {
              console.error('Camera error:', response.errorMessage);
              return;
          }
  
          if (!response.assets || !response.assets[0]) {
              console.warn('No photo returned from camera');
              return;
          }
  
          const photoUri = response.assets[0].uri;
          if (photoUri) {
              setPhoto(photoUri);
          } else {
              console.warn('Photo URI missing');
          }
      },  
      openCamera:async (setPhoto)=> {
          try {
              const options = {
              mediaType: 'photo',
              saveToPhotos: false,
              };
  
              const response = await launchCamera(options);
  
              // ✅ Chama a função separada que trata os erros e validações
              CameraService.handleCameraResponse(response, setPhoto);
          } catch (err) {
              console.error('Error opening camera:', err);
          }
          },
}
export default CameraService;