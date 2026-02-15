import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../../theme';

const CustomIconButton = ({
  onRoundiconPress,
  Icon,
  iconSize = 16,
  stroke = colors.textPrimary,
  radiusBorder = 8,        // optional radius
  showBorder = true,        // show/hide border
  showBackground = true,    // show/hide background color
  activeBorderColor = colors.primary, // border color on press
}) => {
  const [pressed, setPressed] = useState(false);

  return (
    <TouchableOpacity
      onPress={onRoundiconPress}
      activeOpacity={0.7}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      style={[
        styles.mainContainer,
        showBorder && {
          borderWidth: 1,
          borderColor: pressed ? activeBorderColor : colors.lightGrey,
        },
        !showBorder && { borderWidth: 0 },
        showBackground && { backgroundColor: colors.lightGrey },
        !showBackground && { backgroundColor: 'transparent' },
        { borderRadius: radiusBorder },
        { width: 34, height: 34 }, // default size, can make props later
      ]}
    >
      {Icon && <Icon width={iconSize} height={iconSize} stroke={stroke} />}
    </TouchableOpacity>
  );
};

export default CustomIconButton;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
