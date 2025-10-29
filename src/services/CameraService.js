import {  Share } from 'react-native';
const CameraService = {

   sharePhoto : (photo) => {
    if (!photo) return;
    Share.share({ message: 'Look at this cool animal!', url: photo });
  },
}
export default CameraService;