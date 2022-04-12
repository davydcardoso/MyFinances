import { ViewStyle } from "react-native";
import { AppColors } from "../../constants/AppColors";

export const ContainerBody: ViewStyle = {
  width: "100%",
  height: "100%",
  backgroundColor: AppColors.backgroundTertiary,
  alignItems: "center",
}

export const ContainerChart: ViewStyle = {
  backgroundColor: '#FFF',
  margin: 10,
  elevation: 10,
  shadowColor: '#000',
  borderRadius: 15,
  alignContent: 'center',
  alignItems: 'center',
  paddingHorizontal: 10,
  width: '98%',
}