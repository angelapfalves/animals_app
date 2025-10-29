import React, { useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import CameraPermissionService from './src/services/CameraPermissionService'
import Home from './src/pages/Home'
import Photo from './src/pages/Photo'
import { PhotoProvider } from './src/contexts/AnimalPhotoContext';
export default function App() {

  //servico
  useEffect(()=>{
    CameraPermissionService.init();
  },[]);

  return (
<PhotoProvider>
    <View style={styles.container}>    
      <Home/>
      <Photo/>
    </View>
  </PhotoProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3D3B8',
  },

});