import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { colors } from '../../theme';

const CustomSwitch = ({ value = false, onValueChange, size = 28 }) => {
  const [isEnabled, setIsEnabled] = useState(value);
  const animatedValue = new Animated.Value(value ? 1 : 0);

  const toggleSwitch = () => {
    const newValue = !isEnabled;
    setIsEnabled(newValue);
    onValueChange && onValueChange(newValue);

    Animated.timing(animatedValue, {
      toValue: newValue ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const thumbSize = size - 4;
  const trackWidth = size * 1.8;

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [2, trackWidth - thumbSize - 2],
  });

  return (
    <TouchableOpacity onPress={toggleSwitch} activeOpacity={0.8}>
      <View
        style={[
          styles.track,
          {
            width: trackWidth,
            height: size,
            borderRadius: size / 2,
            backgroundColor: isEnabled ? colors.textInverse : colors.textSecondary,
          },
        ]}
      >
        <Animated.View
          style={[
            styles.thumb,
            {
              width: thumbSize,
              height: thumbSize,
              borderRadius: thumbSize / 2,
              backgroundColor: colors.lightGrey,
              transform: [{ translateX }],
            },
          ]}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CustomSwitch;

const styles = StyleSheet.create({
  track: {
    justifyContent: 'center',
    padding: 2,
  },
  thumb: {
    position: 'absolute',
    top: 2,
  },
});
