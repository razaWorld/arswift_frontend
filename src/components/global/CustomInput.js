import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { colors, fonts } from '../../theme';
import { SearchSvg } from '../../assets/svg/svg';

const CustomInput = ({
  label,
  placeholder = 'Enter text',
  value,
  onChangeText,
  leftIcon: LeftIcon ,
  rightIcon: RightIcon,
  onPressRightIcon,
  secureTextEntry = false,
  keyboardType = 'default',
  style,
}) => {
  return (
    <View>
      {/* Label */}
      {label && <Text style={styles.label}>{label}</Text>}

      <View style={[styles.container, style]}>
        {/* Left Icon */}
        {LeftIcon && <LeftIcon width={20} />}

        {/* Text Input */}
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={colors.textSecondary}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          numberOfLines={1}
          textAlignVertical="center"
        />

        {/* Right Icon */}
        {RightIcon && (
          <TouchableOpacity onPress={onPressRightIcon}>
            <RightIcon width={20} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  label: {
    color: colors.textPrimary,
    fontSize: fonts.sizes.sm,
    fontFamily: fonts.medium,
    marginBottom: 6,
    fontWeight:fonts.weights.semibold
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 45,
    backgroundColor: colors.background,
  },
  input: {
    flex: 1,
    fontSize: fonts.sizes.md,
    color: colors.textPrimary,
    textAlignVertical: 'center',
  },
});
