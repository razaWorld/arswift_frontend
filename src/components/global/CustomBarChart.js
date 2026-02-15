import React from 'react';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../theme';

const screenWidth = Dimensions.get('window').width;

const CustomBarChart = ({
  labels = [],
  data = [],
  barColors = [],
  chartHeight = 220,
  showValuesOnTop = true,
}) => {
  // Provide default values if arrays are empty
  const defaultLabels = labels.length ? labels : ['A', 'B', 'C', 'D'];
  const defaultData = data.length ? data : [0, 0, 0, 0];
  const defaultColors = barColors.length
    ? barColors
    : [colors.primary, colors.primary, colors.primary, colors.primary];

  const chartData = {
    labels: defaultLabels,
    datasets: [
      {
        data: defaultData,
        colors: defaultColors.map(color => () => color),
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: "#262626",
    backgroundGradientTo: colors.background,
    decimalPlaces: 0,
    color: (opacity = 1, index) =>
      defaultColors[index] || colors.primary,
    labelColor: () => "white",
    
    propsForBackgroundLines: {
      stroke: "#262626",
    },
  };

  return (
    <BarChart
      data={chartData}
      width={screenWidth - 30}
      height={chartHeight}
      chartConfig={chartConfig}
      fromZero
      showValuesOnTopOfBars={showValuesOnTop}
      style={styles.chartStyle}
    />
  );
};

const styles = StyleSheet.create({
  chartStyle: {
    borderRadius: 16,
    padding: 1,
    marginTop:10
  },
});

export default CustomBarChart;
