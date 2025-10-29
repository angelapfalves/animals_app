import React, { useContext }  from 'react';
import { View, Image,  } from 'react-native';
import SearchBar from '../../components/SearchBar';
import TakePicture from '../../components/TakePicture';
import styles from './Home.styles';
import { AnimalPhotoContext } from '../../contexts/AnimalPhotoContext';

export default function Home() {
  const { photo, setPhoto } = useContext(AnimalPhotoContext);

    return (!photo ?<View style={styles.searchView}> 
         <Image source={require('../../assets/animalLogo.png')} style={styles.animalLogo} />
          <View style={styles.searchContainer}>
            <SearchBar />
            <TakePicture  />
          </View>
      </View>:<View></View>)
}