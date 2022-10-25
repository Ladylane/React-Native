import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default function FormatFont({children, style}) {
  let styleFont = styles.textRegular;
  if (style?.fontWeight === 'bold') {
    styleFont = styles.textBold;
  }
  return <Text style={[styleFont, style]}>{children}</Text>
}

const styles = StyleSheet.create({
  textBold : {
    // fontFamily: "MontserratBold",
    fontWeight: 'normal'
  },
  textRegular : {
    // fontFamily: "MontserratRegular",
    fontWeight: 'normal'
  }
})