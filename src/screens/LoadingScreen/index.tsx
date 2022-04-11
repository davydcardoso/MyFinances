import React from "react";
import { ActivityIndicator, View } from "react-native";
import { ContainerLoadingView } from "./styles";

export const LoadingScreen: React.FC = () => {
  return (
    <View style={ContainerLoadingView} >
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}