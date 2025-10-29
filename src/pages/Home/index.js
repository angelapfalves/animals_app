import React from 'react';
import { View, Image,  } from 'react-native';
import SearchBar from '../../components/SearchBar';
import TakePicture from '../../components/TakePicture';
import styles from './Home.styles';

export default function Home({setPhoto}) {


    return (<View style={styles.searchView}> 
         <Image source={require('../../assets/animalLogo.png')} style={styles.animalLogo} />
          <View style={styles.searchContainer}>
            <SearchBar setPhoto={setPhoto}/>
            <TakePicture setPhoto={setPhoto} />
          </View>
      </View>)
}