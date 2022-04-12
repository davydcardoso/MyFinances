import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { Button } from '../../components/Button';
import { Logo } from '../../components/Logo';
import { AppColors } from '../../constants/AppColors';
import { ContainerBody } from './styles';

export const AccountCreatedScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={ContainerBody}>
        <Logo />
        <View style={{ marginVertical: 40 }} />
        <Image source={require('../../assets/images/success.png')} />
        <View style={{ marginVertical: 10 }} />
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            textAlign: 'center',
            color: AppColors.shapePrimary,
          }}>
          Cadastro concluído!
        </Text>
        <View style={{ marginVertical: 10 }} />
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: AppColors.backgroundSecondary,
          }}>
          Agora você faz parte da plataforma do MyFinances
        </Text>
        <View style={{ marginVertical: '30%' }} />
        <Button
          plaseholder="Fazer Login"
          onPress={() => navigation.navigate('SignIn' as never)}
        />
      </View>
    </SafeAreaView>
  );
};
