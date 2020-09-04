import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {AppStack,AuthStack} from '~/navigation'
import React from 'react'
import { ActivityIndicator, Modal, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { APPSTACK, AUTHSTACK } from '~/screens/Constants'
import { SizeNormalize } from '~/assets/SizeNormalize'

const Stack = createStackNavigator()

type StoreProps = { isAuthenticated: boolean; loading: boolean; }

//criar o modal abrindo quanod a mensagem nao estiver nula
type DispatchProps = {}

type Props = StoreProps & DispatchProps

export const Navigator = (props: Props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={AUTHSTACK} headerMode={'none'}>
        {!props.isAuthenticated && <Stack.Screen component={AuthStack} name={AUTHSTACK} />}
        {props.isAuthenticated && <Stack.Screen component={AppStack} name={APPSTACK} />}
      </Stack.Navigator>
      {props.loading && (
        <Modal
        visible={true}
        transparent={true}
        animationType={'none'}
      >
        <View style={styles.modalBackground}>
          <View style={styles.activityIndicatorWrapper}>
            <ActivityIndicator
              size={'large'}
              animating={props.loading} />
            <Text>Aguarde</Text>
          </View>
        </View>
      </Modal>
      )}
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040'
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: SizeNormalize(100),
    width: '50%',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

const mapStoreToProps = (store: any) => ({
  isAuthenticated: store.auth.isAuthenticated,
  loading: store.main.loading
})
const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({}, dispatch)
}

export default connect(mapStoreToProps, mapDispatchToProps)(Navigator)