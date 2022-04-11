import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ContainerButton, TextButton } from './styles';

type ButtonProps = {
  plaseholder: string;
  onPress: () => void;
};

export const Button: React.FC<ButtonProps> = ({ onPress, plaseholder }) => {
  return (
    <TouchableOpacity onPress={onPress} style={ContainerButton}>
      <Text style={TextButton}>{plaseholder}</Text>
    </TouchableOpacity>
  );
};
