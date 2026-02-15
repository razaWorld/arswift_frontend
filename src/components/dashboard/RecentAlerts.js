import React, { memo, useCallback, useMemo } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { colors } from '../../theme';
import { HeaderTitle } from '../global';
import DashboardCard from './DashboardCard';
import { CancelSvg, EyeSvg } from '../../assets/svg/svg';
import { dummyAlerts } from '../../utils/dumyData';

const SEPARATOR_HEIGHT = 10;

const RecentAlerts = ({
  title = 'Recent Alerts',
  showBadge = false,
  alertsData = dummyAlerts,
  showIcon = false,
  onPressViewAll,
  maxVisibleItems = 4,
  itemHeight = 90, // height of one DashboardCard including padding/margin
}) => {
  const containerHeight = useMemo(() => {
    // Show only "maxVisibleItems" at a time
    return maxVisibleItems * itemHeight + SEPARATOR_HEIGHT * (maxVisibleItems - 1);
  }, [maxVisibleItems, itemHeight]);

  const renderItem = useCallback(({ item }) => (
    <DashboardCard
      title={item.title}
      titleTextColor={colors.surface}
      IconLeft={item.IconLeft}
      description={item.description}
      time={item.time}
      Icon={CancelSvg}
      waat="30watt"
      dollarsHours={item.dollarHours}
    />
  ), []);

  return (
    <View style={styles.container}>
      <HeaderTitle
        title={title}
        showBadge={showBadge}
        badgeText={`${alertsData.length} new`}
        showIcon={showIcon}
        viewAllText="View All"
        onPressIcon={onPressViewAll}
      />

      <FlatList
        data={alertsData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={{ height: SEPARATOR_HEIGHT }} />}
        style={{ maxHeight: containerHeight }}
        nestedScrollEnabled
        showsVerticalScrollIndicator={true} // show scroll when more than 4 items
      />
    </View>
  );
};

export default memo(RecentAlerts);

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
    backgroundColor: colors.background,
  },
});
