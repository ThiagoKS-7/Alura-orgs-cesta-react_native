import React from 'react';
import {Image,Dimensions, StyleSheet} from 'react-native';
import Texto from '../../../../components/Texto'
const width = Dimensions.get('screen').width;
//DIMENSÕES DA IMAGEM DE TOPO
const w_img = 578;
const h_img = 768;

export default function Topo({form}) {
    return (
        <>
            <Image source={form.topo.imagem} style={styles.topo} />
            <Texto style={styles.titulo}>{form.topo.titulo}</Texto>
        </>
        )
}

const styles = StyleSheet.create({
    topo: {
        width:width,
        height:w_img/h_img * width,
    },
    titulo: {
        position:"absolute",
        fontSize:18,
        lineHeight: 26,
        fontWeight: "bold",
        padding:16,
        color:"white",
        textAlign:"center",
        width:"100%"
    },
})