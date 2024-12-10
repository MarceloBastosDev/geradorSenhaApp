import React from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './BatTextInputStyle';

export function BatTextInput() {
  return (
    <TextInput placeholder='Digite sua senha' style={styles.inputer}></TextInput>
  );
}