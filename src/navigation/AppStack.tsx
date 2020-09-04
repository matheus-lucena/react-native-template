import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { enableScreens } from 'react-native-screens'
import {
  DASHBOARDSCREEN
} from '~/screens/Constants'
import {
    Dashboard
} from '~/screens/Main'
enableScreens()
const Stack = createStackNavigator()

function AppStack() {
  return (
    <Stack.Navigator initialRouteName={DASHBOARDSCREEN} screenOptions={{ gestureEnabled: false }} headerMode={'none'}>
      <Stack.Screen name={DASHBOARDSCREEN} component={Dashboard} />
    </Stack.Navigator>
  )
}

export default AppStack