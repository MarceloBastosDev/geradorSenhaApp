import React from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './BatTextInputStyle';

interface BatTextInputProps{
  pass:string
}

export function BatTextInput(props : BatTextInputProps) {
  return (
    <TextInput placeholder='Digite sua senha' style={styles.inputer}
    value={props.pass}></TextInput>
  );
}