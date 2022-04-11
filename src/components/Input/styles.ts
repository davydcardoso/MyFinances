import { Dimensions, TextStyle, ViewStyle } from 'react-native';
import { AppColors } from '../../constants/AppColors';

export const InputStyle: TextStyle = {
  height: 60,
  width: Dimensions.get('screen').width - 40,
  backgroundColor: AppColors.backgroundPrimary,
  fontSize: 18,
  color: '#000000',
  marginBottom: 20,
  paddingHorizontal: 10,
  borderRadius: 5,
};
