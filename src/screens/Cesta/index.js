import React from 'react';
import { StyleSheet, View } from 'react-native'; // qnd usa chaves é pra conseguir desestruturar
import Detalhes from './components/organisms/Detalhes';
import Topo from './components/organisms/Topo'

// o default garante q só seja um componente exportado
export default function Cesta({form}) {
    return (
    <>
        <Topo form={form}/>
        <View style={styles.cesta}>
          <Detalhes form={form}/>
        </View>
    </>
    );
}

const styles = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal:16,
    },
})