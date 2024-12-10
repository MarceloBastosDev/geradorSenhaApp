import React, {useState} from 'react';
import { View, Button, Text, Pressable } from 'react-native';

import { styles } from './BatButtonStyle';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePass from './passwordService';
import * as Clipboard from 'expo-clipboard';

export function BatButton() {
    const [pass, setPass] = useState('')

    function handleGenerateButton(){
        let generateToken = generatePass()
        setPass(generateToken)
    }

    function handleCopyButton(){
        Clipboard.setStringAsync(pass)
    }
  return (
    <>
        <BatTextInput pass={pass}/>
        <Pressable style={styles.button} onPress={handleGenerateButton}>
            <Text style={styles.text}>GENERATE</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={handleCopyButton}>
            <Text style={styles.text}>COPY 📝</Text>
        </Pressable>
    </>
  );
}