import React , { useContext } from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './TakePicture.styles';
import { AnimalPhotoContext } from '../../contexts/AnimalPhotoContext';
import CameraService from '../../services/CameraService';

export default function TakePicture() {

  const { photo, setPhoto } = useContext(AnimalPhotoContext);
    
  return (
   <View >
    <TouchableOpacity onPress={() => CameraService.openCamera(setPhoto)} style={styles.button}>
    <Icon name="camera-alt" size={30} color="#fff" />
   </TouchableOpacity>
   </View>
  );
}

