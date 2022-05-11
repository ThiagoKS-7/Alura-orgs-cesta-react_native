import React from 'react';
import Texto from "../../../../components/Texto"
import { Image, Dimensions,StyleSheet, View } from 'react-native'
const width = Dimensions.get('screen').width;
//DIMENSÕES DA IMAGEM DE TOPO
const w_img = 10;
const h_img = 10;

export default function Lista({form}) {
    return (
        <>
            <Texto style={styles.titulo}>{form.itens.titulo}</Texto>
            {form.itens.lista.map(({nome, imagem}) => {
                return (
                    <>
                        <View style={styles.lista} key={nome}>                 
                            <Image source={imagem} style={styles.imagem}></Image>
                            <Texto style={styles.listaTexto}>{nome}</Texto>
                        </View>
                    </>
                )
            })}
        </>
    )
}

const styles = StyleSheet.create({
    titulo: {
        fontSize:16,
        marginTop:16,
        lineHeight:26,
        fontWeight:"bold",
        textAlign: "center",
        width:"100%",

    },
    imagem: {
        width:80,
        height:80,
    },
    lista: {
        margin: 8,
        flexDirection: "row"
    },
    listaTexto: {
        marginTop:30,
        marginLeft:8,
        flexDirection: "column",
        alignItems: "center",
        fontSize:16,
        lineHeight:26,
        justifyContent: "center",
        textAlign: "center"
    }
})