import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { GreenDotSvg, PowerSvg, RedDotSvg, TripleDotSvg, ZigzagArrowUpSvg } from '../../assets/svg/svg';
import { colors, fonts } from '../../theme';
import { CustomButton } from '../global';

const STATUS_CONFIG = {
  Online: {
    Icon: GreenDotSvg,
    textColor: colors.online,
    bgColor: colors.onlineBage,
  },
  Offline: {
    Icon: RedDotSvg,
    textColor: colors.error,
    bgColor: colors.errorBg,
  },
};

const FleetCard = ({
  fleetName = 'RTX-3090-EU-West-02',
  fleetDetails = 'Fleet 2x RTX 3090 here',
  status = 'Online',
  onPress,
  showFooter = true,
}) => {
  const statusConfig = STATUS_CONFIG[status] || STATUS_CONFIG.Online;
  const StatusIcon = statusConfig.Icon;

  return (
    <Pressable style={styles.card} onPress={onPress}>
      {/* ---------- HEADER ---------- */}
      <View style={styles.row}>
        <View style={styles.left}>
          <Text style={styles.title}>{fleetName}</Text>
          <Text style={styles.details}>{fleetDetails}</Text>
        </View>

        <View style={styles.rightRow}>
          <View
            style={[
              styles.statusBadge,
              { backgroundColor: statusConfig.bgColor },
            ]}
          >
            <StatusIcon />
            <Text
              style={[
                styles.statusText,
                { color: statusConfig.textColor },
              ]}
            >
              {status}
            </Text>
          </View>

          <TripleDotSvg />
        </View>
      </View>

      {/* ---------- INFO ROW ---------- */}
      <View style={styles.infoRow}>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Current Task</Text>
          <CustomButton
            title="AI Rental"
            customStyle={styles.outlinedButton}
            customTextStyle={styles.outlinedButtonText}
          />
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.label}>Platform</Text>
          <Text style={styles.value}>Vast.Ai</Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.label}>Est. Profit/Hr</Text>
          <View style={{flexDirection:'row',alignItems:'center',gap:5}}>
          <ZigzagArrowUpSvg/>
          <Text style={styles.value}>$4.85</Text>
          </View>
        </View>
      </View>

      {/* ---------- FOOTER ---------- */}
      {showFooter && <View style={styles.footerView} />}
       
       
        <View style={styles.FooterInfoRow}>
      
        <View style={styles.infoItem}>
          <Text style={styles.label}>Current Task</Text>
          <View style={{flexDirection:'row',alignItems:'center',gap:5}}>
          <PowerSvg height={15} stroke={colors.surface}/>
          <Text style={styles.value}>380W</Text>
          </View>
        </View>

        <View style={styles.infoItem}>
           <Text style={styles.label}>Last Seen</Text>
          <Text style={styles.value}>about 1 hour ago</Text>
        </View>

      </View>
    </Pressable>
  );
};

export default FleetCard;

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: colors.lightGrey,
    padding: 14,
    borderRadius: 12,
    backgroundColor: colors.background,
  },

  /* HEADER */
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  left: {
    flex: 1,
    paddingRight: 12,
  },

  title: {
    fontSize: fonts.sizes.md,
    fontWeight: fonts.weights.semibold,
    color: colors.textPrimary,
  },

  details: {
    fontSize: fonts.sizes.sm,
    color: colors.textSecondary,
    marginTop: 4,
  },

  /* STATUS */
  rightRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },

  statusText: {
    fontSize: fonts.sizes.xs,
    fontWeight: fonts.weights.semibold,
  },

  /* INFO ROW */
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
  },

  infoItem: {
    gap: 6,
    
  },

  label: {
    fontSize: fonts.sizes.xs,
    color: colors.textSecondary,
  },

  value: {
    fontSize: fonts.sizes.sm,
    color: colors.textPrimary,
    fontWeight: fonts.weights.regular,
  },

  /* BUTTON */
  outlinedButton: {
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.lightGrey,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },

  outlinedButtonText: {
    color: colors.blue,
    fontSize: fonts.sizes.xs,
    fontWeight: fonts.weights.semibold,
  },

  /* FOOTER */
  footerView: {
    height: 1,
    backgroundColor: colors.lightGrey,
    marginTop: 20,
  },
  FooterInfoRow:{
    flexDirection:'row',
    justifyContent:'space-between',
    borderWidth:2,
    // borderColor:'red',
    marginTop:20
    
  }
});
