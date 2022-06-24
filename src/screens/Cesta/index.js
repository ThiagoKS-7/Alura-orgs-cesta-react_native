import React from 'react';
import { StyleSheet, View,ScrollView } from 'react-native'; // qnd usa chaves é pra conseguir desestruturar
import Detalhes from './components/organisms/Detalhes';
import Itens from './components/organisms/Itens';
import Topo from './components/organisms/Topo'

// o default garante q só seja um componente exportado
export default function Cesta({form}) {
    return (
    <>
    <ScrollView>
        <Topo form={form}/>
        <View style={styles.cesta}>
          <Detalhes form={form}/>
          <Itens form={form}/>
        </View>
    </ScrollView>
    </>
    );
}

const styles = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal:16,
    },
})