import React , { useContext } from 'react';
import {View, TouchableOpacity} from 'react-native';
import { launchCamera } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './TakePicture.styles';
import { AnimalPhotoContext } from '../../contexts/AnimalPhotoContext';


export default function TakePicture() {

  const { photo, setPhoto } = useContext(AnimalPhotoContext);
        async function openCamera() {
        try {
            const options = {
            mediaType: 'photo',
            saveToPhotos: false,
            };

            const response = await launchCamera(options);

            // ✅ Chama a função separada que trata os erros e validações
            handleCameraResponse(response, setPhoto);
        } catch (err) {
            console.error('Error opening camera:', err);
        }
        }


    function handleCameraResponse(response) {
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
    }

  return (
   <View >
    <TouchableOpacity onPress={() => openCamera()}style={styles.button}>
    <Icon name="camera-alt" size={30} color="#fff" />
   </TouchableOpacity>
   </View>
  );
}

