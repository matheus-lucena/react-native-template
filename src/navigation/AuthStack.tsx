import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { enableScreens } from 'react-native-screens'
import {
  DASHBOARDSCREEN, LOGINSCREEN
} from '~/screens/Constants'
import {LoginScreen} from '~/screens/Auth'

enableScreens()
const Stack = createStackNavigator()

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName={DASHBOARDSCREEN} screenOptions={{ gestureEnabled: false }} headerMode={'none'}>
      <Stack.Screen name={LOGINSCREEN} component={LoginScreen} />
    </Stack.Navigator>
  )
}

export default AuthStack