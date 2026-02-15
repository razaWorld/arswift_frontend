import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../../theme'
import { CustomButton, Header, HeaderTitle } from '../../../components/global'
import { FleetCard } from '../../../components/fleetManagement'
import { ScreenNames } from '../../../routes'

const SwitichControlPanal = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Header/>
      <View style={styles.container}>
          <HeaderTitle title='Switcher Control Panel' description='Configure automatic workload switching and view available tasks'/>

          <CustomButton onPress={()=>navigation.navigate(ScreenNames.ANALYTICSREPORTS)} customStyle={styles.configureButton} title='Configure Auto-Switch'/>
          <HeaderTitle title='Available Workloads' description='Current profitability rankings for all platforms'/>
          <FleetCard/>
          <FleetCard/>
        
      </View>
    </View>
  )
}

export default SwitichControlPanal

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:colors.background
  },
  container:{
    padding:15,
    gap:10
  },
  configureButton:{
    width:'60%'
  }
})