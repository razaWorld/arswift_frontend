import { StyleSheet, View } from 'react-native';
import React from 'react';
import CustomIconButton from './CustomIconButton';
import CustomButton from './CustomButton';
import {
  AddIconSvg,
  GridIconSvg,
  NotificationSvg,
  SearchSvg,
  UserSvg,
} from '../../assets/svg/svg';
import { colors } from '../../theme';
import { useNavigation } from '@react-navigation/native';
import { ScreenNames } from '../../routes';

const Header = () => {
  const navigation=useNavigation()
  return (
    <View>
      <View style={styles.container}>
        {/* LEFT (start) */}
        <View style={styles.leftGroup}>
          <CustomIconButton Icon={GridIconSvg} stroke="white" />
          <CustomIconButton Icon={SearchSvg} stroke="white" />
        </View>

        {/* RIGHT (end) */}
        <View style={styles.rightGroup}>
          <CustomButton title="Add Rig" leftIcon={AddIconSvg} />
          <CustomIconButton Icon={NotificationSvg} showBorder={false} showBackground={false} />
          <CustomIconButton onRoundiconPress={()=>navigation.navigate(ScreenNames.SETTING)} Icon={UserSvg} showBorder={false} showBackground={false} />
        </View>
      </View>

      <View style={styles.divider} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // key
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: colors.background,
  },
  leftGroup: {
    flexDirection: 'row',
    gap: 10,
  },
  rightGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  divider: {
    height: 1,
    backgroundColor: colors.lightGrey,
  },
});
