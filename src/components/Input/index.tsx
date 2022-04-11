import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInput, View } from 'react-native';
import { InputStyle } from './styles';

type InputProps = {
  control: Control<any>;
  name: string;
  plaseholder: string;
  isPassword?: boolean;
};

export const InputController: React.FC<InputProps> = ({
  plaseholder,
  control,
  name,
  isPassword,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <TextInput
          placeholder={plaseholder}
          onChangeText={onChange}
          value={value}
          style={InputStyle}
          secureTextEntry={isPassword}
        />
      )}
    />
  );
};
