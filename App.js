import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CameraPermissionService from './src/services/CameraPermissionService'
import Home from './src/pages/Home'
import Photo from './src/pages/Photo'


export default function App() {
  const [photo, setPhoto] = useState(null);


  //servico
  useEffect(()=>{
 const init = async () => {
      // Check if we already have a saved permission
      const saved = await CameraPermissionService.getSavedPermission();
      if (saved === 'granted') {
      } else {
        // Ask for permission if it's the first time or was denied
        const status = await CameraPermissionService.requestPermission();
      }
    };

    init();
  },[]);

  return (
    <View style={styles.container}>    
      {!photo ? <Home setPhoto={setPhoto}/> : <Photo photo={photo} setPhoto={setPhoto}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D1BA99',
  },
});