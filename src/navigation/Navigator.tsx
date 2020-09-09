import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
  ActivityIndicator, Modal, StyleSheet, Text, View,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { SizeNormalize } from '~/assets/SizeNormalize';
import Message from '~/components/Message';
import { AppStack, AuthStack } from '~/navigation';
import { APPSTACK, AUTHSTACK } from '~/screens/Constants';

const Stack = createStackNavigator();

type StoreProps = {
  isAuthenticated: boolean
  loading: boolean
  message: string
}

// criar o modal abrindo quanod a mensagem nao estiver nula
type DispatchProps = {}

type Props = StoreProps & DispatchProps

const Navigator = (props:Props) => {
  const { isAuthenticated, loading, message } = props;
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={AUTHSTACK} headerMode="none">
        {!isAuthenticated && <Stack.Screen component={AuthStack} name={AUTHSTACK} />}
        {isAuthenticated && <Stack.Screen component={AppStack} name={APPSTACK} />}
      </Stack.Navigator>
      {loading && (
      <Modal
        visible
        transparent
        animationType="none"
      >
        <View style={styles.modalBackground}>
          <View style={styles.activityIndicatorWrapper}>
            <ActivityIndicator
              size="large"
              animating={loading}
            />
            <Text>Aguarde</Text>
          </View>
        </View>
      </Modal>
      )}
      <Message message={message} />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: SizeNormalize(100),
    width: '50%',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

const mapStoreToProps = (store: any) => ({
  isAuthenticated: store.auth.isAuthenticated,
  loading: store.main.loading,
  message: store.main.message,
});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStoreToProps, mapDispatchToProps)(Navigator);
