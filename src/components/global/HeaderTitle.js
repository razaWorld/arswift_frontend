import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { colors, fonts } from '../../theme';
import { ForwardNextSvg } from '../../assets/svg/svg';
import CustomSwitch from '../dashboard/CustomSwitch';
const HeaderTitle = ({
  title = '',
  description = '',
  showBadge = false,
  badgeText = '',
  showIcon = false,
  onPressIcon,
  viewAllText = 'View All',
  containerStyle = {},
  titleStyle = {},
  descriptionStyle = {},
  showSwitch=false,
  swtichValue,
  onSwitchValueChange
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.row}>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',flex:1}}>

        <Text style={[styles.titleText, titleStyle]}>{title}</Text>
        {  showSwitch&&
 
         <CustomSwitch onValueChange={onSwitchValueChange} value={swtichValue}/>
        }
        </View>

        <View style={styles.rightGroup}>
          {showBadge && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{badgeText}</Text>
            </View>
          )}

          {showIcon && (
            <TouchableOpacity style={styles.viewAllContainer} onPress={onPressIcon}>
              <Text style={styles.viewAllText}>{viewAllText}</Text>
              <ForwardNextSvg width={20} height={15} />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {description ? (
        <Text style={[styles.descriptionText, descriptionStyle]}>{description}</Text>
      ) : null}
    </View>
  );
};

export default HeaderTitle;

const styles = StyleSheet.create({
  container: { marginBottom: 10 },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
  },
  rightGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  titleText: {
    fontWeight: fonts.weights.semibold,
    fontSize: fonts.sizes.lg,
    color: colors.textPrimary,
  },
  descriptionText: {
    marginTop: 4,
    fontSize: fonts.sizes.sm,
    color: colors.textSecondary,
  },
  badge: {
    backgroundColor: colors.lightGrey,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  badgeText: {
    color: colors.surface,
    fontSize: fonts.sizes.xs,
    fontWeight: fonts.weights.semibold,
  },
  viewAllContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingVertical: 4,
    paddingHorizontal: 6,
  },
  viewAllText: {
    fontSize: fonts.sizes.sm,
    fontWeight: fonts.weights.semibold,
    color: colors.surface,
  },
});
