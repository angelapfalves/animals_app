import React, { useState, useContext } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './SearchBar.styles';
import { AnimalPhotoContext } from '../../contexts/AnimalPhotoContext';
import CameraService from '../../services/CameraService';

export default function SearchBar() {
  const { photo, setPhoto } = useContext(AnimalPhotoContext);
  const [query, setQuery] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={query}
        onChangeText={setQuery}
        placeholder="Search Image"
        returnKeyType="search"
      />
      <TouchableOpacity style={[styles.search, query === '' && styles.disabledSearch,]} onPress={() => { CameraService.handleSearch(setPhoto, query) }} disabled={query === '' ? true : false}>
        <Icon name="search" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
