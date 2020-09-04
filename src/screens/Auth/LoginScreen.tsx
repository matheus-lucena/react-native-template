import React from 'react';
import { Text, View } from 'react-native';
import { translate } from '~/locales'

const Login = () => {
  return (
      <View>
        <Text>{translate('hello')}</Text>
      </View>
  );
};

export default Login;
