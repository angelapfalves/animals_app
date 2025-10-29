
import { StyleSheet,Dimensions } from 'react-native';

export default StyleSheet.create({
  container:{
    flex:1,
    marginTop:50
 }, 
  buttons:{
    flexDirection:'row',
    justifyContent:'space-between',
    flex:1,
    marginTop:20
  },
  returnButton:{
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  shareButton: { 
    flexDirection: 'row',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    
  },
  image: {
    maxWidth: Dimensions.get('window').width ,
    resizeMode: 'contain',
    flex:15,
    marginBottom:100
  },
});