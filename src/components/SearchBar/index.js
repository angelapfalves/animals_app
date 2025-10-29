import React, { useState, useContext } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import api from '../../services/api';
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './SearchBar.styles';
import { AnimalPhotoContext } from '../../contexts/AnimalPhotoContext';

export default function SearchBar() {

  const { photo, setPhoto } = useContext(AnimalPhotoContext);

  const [query, setQuery] = useState('');

  const searchPhotos = async (q) => {
    if (!q) return null;
    try {
      const response = await api.get('/search/photos', {
        params: { query: q, per_page: 10 },
      });
      return response.data.results[Math.floor(Math.random() * 10)]|| null;
    } catch (error) {
      console.error('Erro ao buscar imagem:', error.message);
      return null;
    } 
  };

   const handleSearch = async () => {
    const photo = await searchPhotos(query);
    if (photo) {
      setPhoto(photo.urls.small);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}          // aplica estilo
        value={query}
        onChangeText={setQuery}
        placeholder="Search Image"
        returnKeyType="search"
      />
      <TouchableOpacity style={styles.search} onPress={handleSearch}>
            <Icon name="search" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
