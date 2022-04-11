import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useForm } from 'react-hook-form';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Button } from '../../components/Button';
import { InputController } from '../../components/Input';
import { Logo } from '../../components/Logo';
import { AppColors } from '../../constants/AppColors';
import { ContainerBody, ContainerInput, TitleSignInStyle } from './styles';

export const SignUpScreen: React.FC = () => {
  const { control } = useForm();

  const navigation = useNavigation();

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled>
        <View style={ContainerBody}>
          <Logo />
          <View style={{ marginVertical: 20 }} />
          <Text style={TitleSignInStyle}>Faça seu cadastro</Text>
          <View style={{ marginVertical: 10 }} />
          <View style={ContainerInput}>
            <InputController
              name="username"
              plaseholder="Nome de usuário"
              control={control}
            />
            <InputController
              name="email"
              plaseholder="E-mail"
              control={control}
            />
            <InputController
              name="password"
              plaseholder="Senha"
              control={control}
            />
            <View style={{ marginVertical: 10 }} />
            <Button
              onPress={() => navigation.navigate('AccountCreated' as never)}
              plaseholder="Enviar"
            />
            <View style={{ marginVertical: 10 }} />

            <TouchableOpacity
              onPress={() => navigation.navigate('SignIn' as never)}>
              <Text
                style={{
                  fontSize: 18,
                  color: AppColors.colorOrange,
                }}>
                Voltar para o login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
