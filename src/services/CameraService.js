import {  Share } from 'react-native';
import api from './api';

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
}
export default CameraService;