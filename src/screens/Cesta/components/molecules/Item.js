import React from 'react';
import Texto from '../../../../components/Texto';
import { Image, View,StyleSheet } from 'react-native'

export default function Item({item: {nome,imagem}}) {
    return (
        <View style={styles.item}>
            <Image source={imagem} style={styles.imagem}/>
            <Texto key={nome} style={styles.nome}>{nome}</Texto>
        </View>
    )
}

const styles = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ececec",
        padding: 16,
        alignItems: "center",
    },

    imagem: {
        width: 46,
        height: 46,
    },

    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 20,
    }

})