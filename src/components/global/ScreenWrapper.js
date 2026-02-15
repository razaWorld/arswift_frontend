import React from 'react';
import { ScrollView, View, StyleSheet, SafeAreaView } from 'react-native';
import { colors } from '../../theme';

const ScreenWrapper = ({
  children,
  scroll = true,               // enable/disable scrolling
  padding = 20,                // default padding
  backgroundColor = colors.background,
  contentContainerStyle = {},   // additional styles for inner container
  style = {},                   // additional styles for wrapper
}) => {
  if (scroll) {
    return (
      <SafeAreaView style={[{ flex: 1, backgroundColor }, style]}>
        <ScrollView
          contentContainerStyle={[
            { padding: padding },
            contentContainerStyle,
          ]}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[{ flex: 1, backgroundColor, padding: padding }, style]}>
      {children}
    </SafeAreaView>
  );
};

export default ScreenWrapper;
