import React from 'react';
import { Provider } from 'react-redux';
import Store from '~/Store';
import Navigator from '~/navigation/Navigator'

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
      <Provider store={Store}>
        <Navigator />
      </Provider>
  );
};

export default App;
