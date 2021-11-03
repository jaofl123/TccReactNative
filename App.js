import React from 'react';
import type {Node} from 'react';
import { SafeAreaView, ScrollView,StatusBar, StyleSheet, Text, TextInput, useColorScheme, View, Image,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const App = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/Aviso2.png')}
      style={styles.logo_inicial}/>
      <Text style={styles.EyeFinderTexto}>Esta aplicação foi pensada e projetada para auxiliar deficientes visuais.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#9A22B8'
  },
  EyeFinderTexto:{
    width: 293,
    height: 75,
    top: 398,
    left: 33,
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center',
        
  },
  logo_inicial:{
    width: 128,
    height: 128,
    top: 192,
    left: 116,
    position: 'absolute',
  }
});

export default App;


