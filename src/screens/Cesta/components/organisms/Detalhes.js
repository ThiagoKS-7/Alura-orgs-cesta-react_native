import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Texto from '../../../../components/Texto'
import cesta from '../../../../mocks/cesta'

export default function Detalhes({form}) {
    return (
        <>
            <Texto style={styles.nome}>{form.detalhes.nome}</Texto>
            <View style={styles.fazenda}>
                <Image source={form.detalhes.imagem} style={styles.imagemFazenda}></Image>
                <Texto style={styles.nomeFazenda}></Texto>
            </View>
            <Texto style={styles.descricao}>
                {form.detalhes.descricao}
            </Texto>
            <Texto  style={styles.preco}>{form.detalhes.preco}</Texto>
        </>
    )
}

const styles = StyleSheet.create({
    nome: {
        color: "#464646",
        fontSize:26,
        lineHeight:42,
        fontWeight:"bold",
    },
    fazenda: {
        flexDirection:"row",
    },  
    imagemFazenda:{
        width:32,
        height:32
    },
    nomeFazenda: {
        fontSize:16,
        marginTop:12,
        lineHeight:16,
        marginLeft: 12,
    },
    descricao: {
        color:"#A3A3A3",
        fontSize:16,
        lineHeight:26,
    },
    preco: {
        color:"#2A9F85",
        fontWeight:"bold",
        fontSize:26,
        lineHeight:42,
        marginTop:8,
    }
})