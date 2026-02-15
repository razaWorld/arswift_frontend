// Dashboard.js
import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { colors } from '../../../theme';
import { CustomBarChart, Header, HeaderTitle } from '../../../components/global';
import { DashboardCard, RecentAlerts } from '../../../components/dashboard';
import { AddIconSvg, LoopSwitchIconSvg } from '../../../assets/svg/svg';
import { dashboardData, dummyAlerts1 } from '../../../utils/dumyData';
import { ScreenNames } from '../../../routes';

const Dashboard = ({navigation}) => {
  const [autoSwitch, setAutoSwitch] = useState(false);

  const chartLabels = ['Jan', 'Feb', 'Mar', 'Apr'];
  const chartData = [120, 90, 150, 200];
  const barColors = ['#4CAF50', '#FF9800', '#2196F3', '#E91E63'];

  const renderItem = ({ item }) => (
    <DashboardCard
      title={item.title}
      titleTextColor={colors.textSecondary}
      count={item.count}
      onlineCount={item.onlineCount}
      offlineCount={item.offlineCount}
      Icon={item.Icon}
    />
  );

  return (
    <View style={styles.container}>
      <Header />

      <FlatList
        data={dashboardData}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            {/* Page Title */}
            <HeaderTitle
              title="Dashboard"
              description="Monitor your GPU fleet performance and profitability"
            />

            {/* Dashboard Top Card */}
            <DashboardCard
              showTopRow
              switchValue={autoSwitch}
              onSwitchChange={setAutoSwitch}
              switchLabel="Auto-Switch Enabled"
              topButtonTitle="Add Rig"
              bottomButtonTitle="Manual Switch"
              topButtonIcon={AddIconSvg}
              bottomButtonIcon={LoopSwitchIconSvg}
              onManualSwitchPress={()=>navigation.navigate(ScreenNames.SWITICHCONTROLPANAL)}
              
            />
          </>
        }
        ListFooterComponent={
          <>
            {/* Bar Chart */}
            <CustomBarChart
              labels={chartLabels}
              data={chartData}
              barColors={barColors}
              chartHeight={250}
              showValuesOnTop
            />

            {/* Recent Alerts */}
            <View style={{ marginTop: 20 }}>
              <RecentAlerts showBadge={true} />
              <RecentAlerts onPressViewAll={()=>navigation.navigate(ScreenNames.FLEETMANAGEMENT)} alertsData={dummyAlerts1} title='Fleet Overview' showIcon={true}/>
            </View>
          </>
        }
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  listContent: {
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 30,
  },
});
