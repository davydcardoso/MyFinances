import React from 'react';
import { Image, Text, View } from 'react-native';
import { ContainerHeader, TextTitleHeader } from './styles';

export const Header: React.FC = () => {
  return (
    <View style={ContainerHeader}>
      <Image source={require('../../assets/logo.png')} />
      <Text style={TextTitleHeader}>Myfinances</Text>
    </View>
  );
};
