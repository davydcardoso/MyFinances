import { TextStyle, ViewStyle } from 'react-native';
import { AppColors } from '../../constants/AppColors';

export const ContainerHeader: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
  height: 80,
  backgroundColor: AppColors.colorBlue,
  padding: 10,
};

export const TextTitleHeader: TextStyle = {
  fontSize: 20,
  color: AppColors.backgroundPrimary,
  fontWeight: '500',
};
