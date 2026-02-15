import { StyleSheet, View, ScrollView } from 'react-native'
import React from 'react'
import { colors } from '../../../theme'
import { Header, HeaderTitle } from '../../../components/global'
import { ProfileSettingCard, NotificationCard,DefaultRig } from '../../../components/settings'

const Setting = () => {
  return (
    <View style={styles.mainContainer}>
      <Header />

      <ScrollView
        contentContainerStyle={styles.container} // ✅ correct place
        showsVerticalScrollIndicator={false}
      >
        <HeaderTitle
          title="Settings"
          description="Configure your preferences and application settings"
        />

        <ProfileSettingCard />
        <NotificationCard />
        <DefaultRig/>
       
      </ScrollView>
    </View>
  )
}

export default Setting

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    padding: 15,
    rowGap: 10, // ✅ works inside contentContainerStyle
    paddingBottom: 30, // better scroll ending
  },
})
