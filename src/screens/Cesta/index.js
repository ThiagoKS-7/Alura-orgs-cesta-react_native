import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native'; // qnd usa chaves é pra conseguir desestruturar
import Texto from '../../components/Texto';
import Detalhes from './components/organisms/Detalhes';
import Item from './components/molecules/Item';
import Topo from './components/organisms/Topo'

// o default garante q só seja um componente exportado
export default function Cesta({form}) {
    return (
    <>
        <FlatList 
            data={form.itens.lista}
            renderItem={Item} 
            keyExtractor={({nome}) => nome}
            ListHeaderComponent={() => { 
                return <>
                    <Topo form={form}/>
                    <View style={styles.cesta}>
                        <Detalhes form={form}/>
                        <Texto style={styles.titulo}>{form.itens.titulo}</Texto>
                    </View>
                </>
            }}
        />
    </>
    );
}

const styles = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal:16,
    },
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
})