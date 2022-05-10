import React from 'react';
import { Image,StyleSheet, Dimensions,Text, View } from 'react-native'; // qnd usa chaves é pra conseguir desestruturar
import topo from '../../assets/topo.png'
import logo from '../../assets/logo.png'
const width = Dimensions.get('screen').width;
const w_img = 578;
const h_img = 768;

// o default garante q só seja um componente exportado
export default function Cesta() {
    return (
    <>
        <Image source={topo} style={styles.topo} />
        <Text style={styles.titulo}>Detalhe da cesta</Text>

        <View style={styles.cesta}>
            <Text style={styles.nome}>Cesta de verduras</Text>
            <View style={styles.fazenda}>
                <Image source={logo} style={styles.imagemFazenda}></Image>
                <Text style={styles.nomeFazenda}>Jenny Jack Farm</Text>
            </View>
            <Text style={styles.descricao}>
                Uma cesta com produtos selecionados
                cuidadosamente  da fazenda direto para a
                sua cozinha
            </Text>
            <Text  style={styles.preco}>R$ 40,00</Text>
        </View>
    </>
    );
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
    cesta: {
        paddingVertical: 8,
        paddingHorizontal:16,
    },
    nome: {
        color: "#464646",
        fontSize:26,
        lineHeight:42,
        fontFamily:"MontserratBold"
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
        fontFamily:"MontserratRegular"
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