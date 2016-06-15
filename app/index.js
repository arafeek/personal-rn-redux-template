import React from 'react';
import { Provider, connect } from 'react-redux';
import { Router } from 'react-native-router-flux';

import routes from './store/routes';
import configureStore from './store/configure-store';
const RouterWithRedux = connect()(Router);

const App = () => {
  return(
  <Provider store={configureStore()}>
    <RouterWithRedux scenes={routes} />
  </Provider>
  );
}

export default App;
