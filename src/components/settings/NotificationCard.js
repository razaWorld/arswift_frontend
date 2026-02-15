import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { HeaderTitle } from '../global'
import { colors } from '../../theme'

const NotificationCard = () => {
  const [emailNotification, setEmailNotification] = useState(true)
  const [pushNotification, setPushNotification] = useState(false)

  return (
    <View style={styles.card}>
      {/* Card Heading */}
      <HeaderTitle
        title="Notifications"
        description="Manage notification preferences"
      />

      {/* Email Notification */}
      <HeaderTitle
        title="Email Notification"
        description="Receive alerts and updates via email"
        showSwitch
        switchValue={emailNotification}
        onSwitchValueChange={setEmailNotification}
      />

      <View style={styles.divider} />

      {/* Push Notification */}
      <HeaderTitle
        title="Push Notification"
        description="Receive browser push notifications"
        showSwitch
        switchValue={pushNotification}
        onSwitchValueChange={setPushNotification}
      />
    </View>
  )
}

export default NotificationCard

const styles = StyleSheet.create({
  card: {
    padding: 15,
    gap: 12,
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: 8,
    backgroundColor: colors.background,
  },
  divider: {
    height: 1,
    backgroundColor: colors.lightGrey,
  },
})
