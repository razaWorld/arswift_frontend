import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header ,HeaderTitle,CustomBarChart} from '../../../components/global'
import { colors } from '../../../theme'
import { DashboardCard } from '../../../components/dashboard'
import { PriceSvg,ZigzagArrowUpSvg } from '../../../assets/svg/svg'
const AnalyticsReports = () => {
  return (
    <View style={styles.mainContainer}>
      <Header/>
      <View style={styles.container}>
         <HeaderTitle description='Track earnings, performance metrics, and fleet efficiency' title='Analytics & Reports'/>
          <DashboardCard
               title={"Total Revenue (7d)"}
               titleTextColor={colors.textSecondary}
               count={"$5,84.32"}
               onlineCount={`+12.5% vs last period`}
               Icon={PriceSvg}
             />
             <CustomBarChart/>
      </View>
    </View>
  )
}

export default AnalyticsReports

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:colors.background
  },
  container:{
    padding:15,
    gap:10
  }
})