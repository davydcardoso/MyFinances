import { TextStyle, ViewStyle } from 'react-native';
import { AppColors } from '../../constants/AppColors';

export const ContainerBody: ViewStyle = {
  flex: 1,
  width: '100%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: AppColors.colorBlue,
};

export const TitleSignInStyle: TextStyle = {
  fontSize: 30,
  color: AppColors.backgroundPrimary,
  fontWeight: '600',
};

export const ContainerInput: ViewStyle = {
  width: '95%',
  height: '37%',
  alignItems: 'center',
};
