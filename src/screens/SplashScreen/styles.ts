import { TextStyle, ViewStyle } from 'react-native';
import { AppColors } from '../../constants/AppColors';

export const ContainerBody: ViewStyle = {
  width: '100%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: AppColors.colorBlue,
};

export const ContainerRowLogo: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
};

export const TextLogo: TextStyle = {
  fontSize: 30,
  color: AppColors.shapePrimary,
  fontWeight: 'bold',
};
