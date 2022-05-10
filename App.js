import { StatusBar, SafeAreaView } from 'react-native'; //importações de bibliotecas
import Cesta from './src/screens/Cesta'
import {usefonts,Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat'
import React from 'react';
import { useFonts } from 'expo-font';

//retorna uma função App
export default function App() {
  const [fontCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  });
  if (!fontCarregada) {
    return <SafeAreaView/>
  }
  return (
      <SafeAreaView>
        <StatusBar/>
        <Cesta/>
      </SafeAreaView>
  );
}