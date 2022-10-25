import React, {useState} from 'react';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import estrela from '../../assets/estrela.png';
import estrelaCinza from '../../assets/estrelaCinza.png';

export default function Estrelas({
  quantidade:quantidadeAntiga,
  editavel = true,
  grande = true
}){
  const [quantidade, setQuantidade] = useState(quantidadeAntiga)
  const estilos = estilosFuncao(grande);

  const getImage = (index) => {
    if (index < quantidade) {
      return estrela;
    }
    return estrelaCinza;
  }

  const NumEstrelas = ()  => {
    const listaEstrelas = [];
    for (let i = 0; i < 5; i++) {
      listaEstrelas.push(
        <TouchableOpacity key={i} disabled={!editavel} onPress={() => {setQuantidade(i+1)}}>
          <Image key={i} source={getImage(i)} style={estilos.estrela}/>
        </TouchableOpacity>
      ) 
    }
    return listaEstrelas; 
  } 

  return <View style={estilos.estrelas}>
    <NumEstrelas />
  </View>

}
const estilosFuncao = (grande) => StyleSheet.create({
  estrela: {
    width: grande ? 36 : 12,
    height: grande ? 36 : 12
  },
  estrelas: {
    flexDirection: 'row'
  }
})