import { StyleSheet, View } from 'react-native';
import React from 'react';
import CustomIconButton from '../global/CustomIconButton';
import { CustomButton } from '../global';
import { DownloadSvg, DropdownIconSvg, FilterSvg } from '../../assets/svg/svg';
import { colors, fonts } from '../../theme';

const HeaderButtons = () => {
  return (
    <View style={styles.container}>
      {/* Dropdown Buttons with text */}
      <CustomButton
        
        title="All Status "
        customStyle={styles.customButtonStyle}
        rightIcon={DropdownIconSvg}
        customTextStyle={styles.buttonText}
      />
      <CustomButton
        title="All Tasks"
        customStyle={styles.customButtonStyle}
        rightIcon={DropdownIconSvg}
        customTextStyle={styles.buttonText}
      />

      {/* Icon-only buttons */}
      <CustomIconButton stroke={colors.textSecondary} Icon={FilterSvg}  />
      <CustomIconButton Icon={DownloadSvg} stroke={colors.textSecondary} />
    </View>
  );
};

export default HeaderButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  customButtonStyle: {
    backgroundColor: colors.lightGrey,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: colors.textSecondary,
    fontSize: fonts.sizes.sm,
    fontWeight: fonts.weights.semibold,
  },
  iconButton: {
    backgroundColor: colors.lightGrey,
    padding: 10,
    borderRadius: 8,
  },
});
