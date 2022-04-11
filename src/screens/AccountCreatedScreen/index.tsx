import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { ContainerBody } from './styles';

export const AccountCreatedScreen: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={ContainerBody}></View>
    </SafeAreaView>
  );
};
