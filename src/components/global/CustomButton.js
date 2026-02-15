import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { colors,fonts } from '../../theme';

const CustomButton = ({
  title="Button",
  onPress,
  disabled = false,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  backgroundColor,
  textColor,
  borderRadius,
  fontSize,
  fontFamily,
  activeOpacity = 0.8,
  customStyle = {},
  customTextStyle = {},
  leftIconStroke='#171717'
}) => {
  // Default styles with conditional overrides
  const btnBg = disabled ? colors.buttonDisabled : backgroundColor || colors.buttonPrimary;
  const btnRadius = borderRadius !== undefined ? borderRadius : 8;
  const btnTextColor = textColor || colors.buttonTextPrimary;
  const btnFontSize = fontSize || fonts.sizes.md;
  const btnFontFamily = fontFamily || fonts.regular;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={activeOpacity}
      style={[
        styles.button,
        { backgroundColor: btnBg, borderRadius: btnRadius },
        customStyle, // custom style overrides
      ]}
    >
      <View style={styles.content}>
        {LeftIcon && (
          <View style={styles.iconLeft}>
            <LeftIcon stroke={leftIconStroke}  width={20} height={15} />
          </View>
        )}

        {title && (
          <Text
            style={[
              styles.text,
              { color: btnTextColor, fontSize: btnFontSize, fontFamily: btnFontFamily },
              customTextStyle, // custom text style overrides
            ]}
          >
            {title}
          </Text>
        )}

        {RightIcon && (
          <View style={styles.iconRight}>
            <RightIcon />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontWeight:fonts.weights.semibold
  },
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
});

export default CustomButton;
