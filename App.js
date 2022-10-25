import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Page from './src/components/Page';
import mocks from './src/mocks/feira';
import { useFonts, Montserrat_700Bold, Montserrat_400Regular } from '@expo-google-fonts/montserrat';

export default function App() {
  const [ fonteCarregada ] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  })

  if (!fonteCarregada) {
    return <View />
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Page {...mocks}/>
    </SafeAreaView>
  );
};