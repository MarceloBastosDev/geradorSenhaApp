import React from 'react';
import { View, Button, Text, Pressable } from 'react-native';

import { styles } from './BatButtonStyle';
import { BatTextInput } from '../BatTextInput/BatTextInput';

export function BatButton() {
  return (
    <>
        <BatTextInput/>
        <Pressable style={styles.button} onPress={()=>console.log("fui pressionado")}>
            <Text style={styles.text}>GENERATE</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={()=>console.log("fui pressionado")}>
            <Text style={styles.text}>📝</Text>
        </Pressable>
    </>
  );
}