import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

// import {topo, produtores} from '../../mocks/feira'
import Produtores from '../Page/Detalhes/produtores';
import Topo from '../Page/Topo/topo';
import FormatFont from '../formatFont';

export default function feira({topo, produtores}) {
  return <>
    <FlatList
      data={produtores.lista}
      renderItem={Produtores}
      keyExtractor={e => e.nome}
      ListHeaderComponent={() => (
        <>
          <Topo {...topo} />
          <FormatFont style={styles.tituloProdutores}>{`${produtores.titulo}:`}</FormatFont>
        </>
    )}
    />
  </>
}

const styles = StyleSheet.create({
  tituloProdutores: {
    fontSize: 22,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 5
  }
})
