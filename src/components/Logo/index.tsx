import React from 'react';
import { Image, Text, View } from 'react-native';
import { AppColors } from '../../constants/AppColors';
import { ContainerHeaderLogo } from './styles';

export const Logo: React.FC = () => {
  return (
    <View style={ContainerHeaderLogo}>
      <Image source={require('../../assets/logo.png')} />
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: AppColors.shapePrimary,
        }}>
        MyFinaces
      </Text>
    </View>
  );
};
