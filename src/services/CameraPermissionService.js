// src/services/CameraPermissionService.js
import { PermissionsAndroid, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@camera_permission_status';

const CameraPermissionService = {

  init: async () => {
    const saved = await CameraPermissionService.getSavedPermission();
    if (saved === 'granted') {
    } else {
      const status = await CameraPermissionService.requestPermission();
    }
  },

  getSavedPermission: async () => {
    try {
      const status = await AsyncStorage.getItem(STORAGE_KEY);
      return status;
    } catch (err) {
      console.error('Error reading permission status:', err);
      return null;
    }
  },


  savePermission: async (status) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, status);
    } catch (err) {
      console.error('Error saving permission status:', err);
    }
  },


  requestPermission: async () => {
    if (Platform.OS === 'ios') {
      // iOS handles permissions automatically through the image picker
      await CameraPermissionService.savePermission('granted');
      return 'granted';
    }

    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'The app needs access to your camera to take photos.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      const status =
        granted === PermissionsAndroid.RESULTS.GRANTED ? 'granted' : 'denied';

      await CameraPermissionService.savePermission(status);
      return status;
    } catch (err) {
      console.error('Error requesting permission:', err);
      return 'denied';
    }
  },

};

export default CameraPermissionService;