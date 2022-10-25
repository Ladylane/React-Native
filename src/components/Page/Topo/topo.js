import React from 'react';
import {Image, StyleSheet } from 'react-native';
import FormatFont from '../../formatFont';

export default function topo({titulo, imagem}) {
  return <>
    <FormatFont style={styles.tituloTopo}>{titulo}</FormatFont>
    <Image source={imagem} />
  </>
}

const styles = StyleSheet.create({
  tituloTopo: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold'
  }
})