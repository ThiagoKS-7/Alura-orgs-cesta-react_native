import React from 'react';
import { useFonts } from 'expo-font';
import {Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat'
import { StatusBar, SafeAreaView } from 'react-native'; //importações de bibliotecas
import Cesta from './src/screens/Cesta'
import AppLoading from 'expo-app-loading'

/* MOCKS */
import mockCesta from "./src/mocks/cesta"

//retorna uma função App
export default function App() {
  const [fontCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  });
  if (!fontCarregada) {
    return <AppLoading/>
  }
  return (
      <SafeAreaView>
        <StatusBar/>
        <Cesta form ={mockCesta}/>
      </SafeAreaView>
  );
}