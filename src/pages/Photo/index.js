import React, {  useContext} from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './Photo.styles';
import { AnimalPhotoContext } from '../../contexts/AnimalPhotoContext';
import CameraService from '../../services/CameraService';

export default function Photo() {
  const { photo, setPhoto } = useContext(AnimalPhotoContext);


    return (photo?
    <View style={styles.container}> 
    <View style={styles.buttons}>
        <TouchableOpacity onPress={()=>setPhoto(null)} style={styles.returnButton}>
          <Icon name="arrow-back-ios" size={30} color="#ffffff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{CameraService.sharePhoto(photo)}} style={styles.shareButton}>
          <Icon name="share" size={30} color="#ffffff" />
        </TouchableOpacity>
        </View>
          <Image source={{ uri: photo }} style={styles.image} />
    
    </View>:<View></View>
    )
  

}
