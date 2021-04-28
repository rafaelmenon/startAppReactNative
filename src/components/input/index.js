import React from 'react';
import {TextField} from './styles';

const InputComponent = ({placeholder, value, onChangeText}) => {
  return (
    <TextField
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      size="large"
    />
  );
};

export default InputComponent;
