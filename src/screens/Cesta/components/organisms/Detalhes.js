import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Texto from '../../../../components/Texto'
import cesta from '../../../../mocks/cesta'

export default function Detalhes({form}) {
    return (
        <>
            <Texto style={styles.nome}>{form.detalhes.nome}</Texto>
            <View style={styles.fazenda}>
                <Image source={form.detalhes.imagem} style={styles.imagemFazenda}></Image>
                <Texto style={styles.nomeFazenda}>{form.detalhes.nomeFazenda}</Texto>
            </View>
            <Texto style={styles.descricao}>
                {form.detalhes.descricao}
            </Texto>
            <Texto  style={styles.preco}>{form.detalhes.preco}</Texto>
            <TouchableOpacity style={styles.botao}><Texto style={styles.textoBotao}>{form.detalhes.botao}</Texto></TouchableOpacity>
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
    },
    botao: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,
    },
    textoBotao: {
        textAlign: "center",
        color: "#fff",
        lineHeight: 26,
        fontSize: 16,
        fontWeight: "bold",
    }
})