import React, {  useState } from 'react';
import { View, Image,  Share, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './Photo.styles';

export default function Photo({photo ,setPhoto}) {

  const sharePhoto = () => {
    if (!photo) return;
    Share.share({ message: 'Look at this cool animal!', url: photo });
  };

    return (
    <View style={styles.container}> 
    <View style={styles.buttons}>
        <TouchableOpacity onPress={()=>setPhoto(null)} style={styles.returnButton}>
          <Icon name="arrow-back-ios" size={30} color="#ffffff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={sharePhoto} style={styles.shareButton}>
          <Icon name="share" size={30} color="#ffffff" />
        </TouchableOpacity>
        </View>
          <Image source={{ uri: photo }} style={styles.image} />
    
    </View>
    )
  

}
