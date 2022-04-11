import { Dimensions, TextStyle, ViewStyle } from 'react-native';
import { AppColors } from '../../constants/AppColors';

export const ContainerButton: ViewStyle = {
  width: Dimensions.get('window').width - 50,
  height: 50,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: AppColors.colorOrange,
  borderRadius: 5,
};

export const TextButton: TextStyle = {
  fontSize: 20,
  color: AppColors.backgroundPrimary,
  fontWeight: '600',
};
