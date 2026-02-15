import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../theme';
import CustomButton from '../global/CustomButton';
import CustomSwitch from './CustomSwitch';
import { PowerSvg, ThunderSvg, VerticalLineSvg } from '../../assets/svg/svg';
import { ScreenNames } from '../../routes';

const DashboardCard = ({
  /* ---------- TOP ---------- */
  showTopRow = false,
  switchValue,
  onSwitchChange,
  switchLabel,
  topButtonTitle,
  topButtonIcon,

  /* ---------- CONTENT ---------- */
  title,
  titleTextColor = colors.textPrimary,
  IconLeft,
  Icon,
  description,
  time,
  count,
  onlineCount,
  offlineCount,
  dollarsHours,
  waat,

  /* ---------- BOTTOM ---------- */
  bottomButtonTitle,
  bottomButtonIcon,
  bottomButtonStyle,
  onManualSwitchPress
}) => {
  return (
    <View style={styles.card}>

      {/* ---------- TOP ROW ---------- */}
      {showTopRow && (
        <View style={styles.topRow}>
          {switchValue !== undefined && (
            <CustomSwitch value={switchValue} onValueChange={onSwitchChange} />
          )}

          {switchLabel && <Text style={styles.switchLabel}>{switchLabel}</Text>}

          {topButtonTitle && (
            <>
              <VerticalLineSvg height={30} />
              <CustomButton
                title={topButtonTitle}
                leftIcon={topButtonIcon}
                customStyle={styles.topButton}
              />
            </>
          )}
        </View>
      )}

      {/* ---------- HEADER (Icon + Title) ---------- */}
      {(title || IconLeft) && (
        <View style={styles.headerRow}>
          <View style={styles.leftHeader}>
            {IconLeft && <IconLeft />}
            {title && (
              <Text style={[styles.title, { color: titleTextColor }]}>
                {title}
              </Text>
            )}
          </View>
          {Icon && <Icon />}
        </View>
      )}

      {/* ---------- DESCRIPTION ---------- */}
      {description && (
        <Text style={styles.description}>{description}</Text>
      )}

      {/* ---------- TIME ---------- */}
      {time && <Text style={styles.time}>{time}</Text>}

      {/* ---------- METRICS ---------- */}
      {dollarsHours && (
        <View style={styles.metricRow}>
          <View>
            <Text style={styles.metricValue}>{dollarsHours}</Text>
            <View style={styles.powerRow}>
              <PowerSvg />
              <Text style={styles.powerText}>{waat}</Text>
            </View>
          </View>
          <CustomButton leftIcon={ThunderSvg} title="AI Rental" />
        </View>
      )}

      {/* ---------- COUNT ---------- */}
      {count !== undefined && (
        <Text style={styles.count}>{count}</Text>
      )}

      {/* ---------- STATUS ---------- */}
      {(onlineCount !== undefined || offlineCount !== undefined) && (
        <View style={styles.statusRow}>
          {onlineCount !== undefined && (
            <View style={styles.onlineBadge}>
              <Text style={styles.onlineText}>{onlineCount} Online</Text>
            </View>
          )}
          {offlineCount !== undefined && (
            <Text style={styles.offlineText}>{offlineCount} Offline</Text>
          )}
        </View>
      )}

      {/* ---------- BOTTOM BUTTON ---------- */}
      {bottomButtonTitle && (
        <CustomButton
          title={bottomButtonTitle}
          leftIcon={bottomButtonIcon}
          customStyle={[styles.bottomButton, bottomButtonStyle]}
          customTextStyle={styles.bottomButtonText}
          leftIconStroke={colors.surface}
          onPress={onManualSwitchPress}
        />
      )}
    </View>
  );
};

export default DashboardCard;
const styles = StyleSheet.create({
  card: {
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.lightGrey,
    backgroundColor: colors.background,
    marginTop:10
  },

  /* Top */
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 10,
  },

  switchLabel: {
    fontSize: fonts.sizes.sm,
    fontWeight: fonts.weights.semibold,
    color: colors.textPrimary,
  },

  topButton: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },

  /* Header */
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  leftHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  title: {
    fontSize: fonts.sizes.md,
    fontWeight: fonts.weights.semibold,
  },

  /* Text */
  description: {
    marginTop: 6,
    fontSize: fonts.sizes.sm,
    color: colors.textSecondary,
  },

  time: {
    marginTop: 4,
    fontSize: fonts.sizes.xs,
    color: colors.textSecondary,
  },

  count: {
    marginTop: 10,
    fontSize: fonts.sizes.xl,
    fontWeight: fonts.weights.semibold,
    color: colors.textPrimary,
  },

  /* Status */
  statusRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },

  onlineBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    backgroundColor: colors.onlineBage,
  },

  onlineText: {
    fontSize: fonts.sizes.xs,
    color: colors.online,
    fontWeight: fonts.weights.semibold,
  },

  offlineText: {
    fontSize: fonts.sizes.xs,
    color: colors.textSecondary,
  },

  /* Metrics */
  metricRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },

  metricValue: {
    fontSize: fonts.sizes.md,
    color: colors.textPrimary,
  },

  powerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  powerText: {
    fontSize: fonts.sizes.xs,
    color: colors.textSecondary,
  },

  /* Bottom */
  bottomButton: {
    marginTop: 14,
    width: '55%',
    borderRadius: 10,
    backgroundColor: colors.lightGrey,
  },

  bottomButtonText: {
    fontSize: fonts.sizes.sm,
    fontWeight: fonts.weights.semibold,
    color: colors.surface,
  },
});

