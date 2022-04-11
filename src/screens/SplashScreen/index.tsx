import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { ContainerBody, ContainerRowLogo, TextLogo } from './styles';

export const SplashScreen: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={ContainerBody}>
        <View style={ContainerRowLogo}>
          <Image source={require('../../assets/logo.png')} />
          <Text style={TextLogo}>MyFinances</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
