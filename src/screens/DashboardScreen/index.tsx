import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Dimensions } from 'react-native';
import { BarChart, LineChart } from 'react-native-chart-kit';

import { ContainerBody, ContainerChart } from './styles';

export const DashboardScreen: React.FC = () => {
  const screenWidth = Dimensions.get('window').width;

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ['Visão Geral'], // optional
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={ContainerBody}>
        <View style={ContainerChart}>
          <LineChart
            data={data}
            width={screenWidth}
            height={220}
            chartConfig={{
              backgroundColor: '#fff',
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(37, 36, 34, 1)`,
              labelColor: (opacity = 1) => `rgba(37, 36, 34, 1)`,
              style: {
                borderRadius: 16,
              },
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
