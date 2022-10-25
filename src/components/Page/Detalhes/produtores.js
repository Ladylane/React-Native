import React from 'react';
import {Image, View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Estrelas from '../../Estrelas';
import FormatFont from '../../formatFont';

// no index esta produtores.lista, dai aki nos parametros tenho q colocar dessa forma q esta, q sao as chaves de lista.
export default function produtores({item: {imagem, nome, estrelas}}) {
  return ( 
    <TouchableOpacity style={styles.produtores} onPress={() => {}}>
      <Image source={imagem} style={styles.icon}/>
      <View style={styles.informacoes}>
        <FormatFont style={styles.nomeProdutores}>{nome}</FormatFont>
        <Estrelas quantidade={estrelas}/>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    margin: 7
  },
  produtores: {
    flexDirection: 'row',
    alignItems:'center',
    margin: 5,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: "#C0C0C0",
    borderRadius: 10,
    backgroundColor: "#F6F6F6",
  },
  nomeProdutores: {
    fontSize: 20,
  },
  informacoes: {
    flex: 1
  }
})