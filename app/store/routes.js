import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';
import CardCollectionContainer from '../containers/card-collection.js';
import MyCardContainer from '../containers/my-card.js';

export default scenes = Actions.create(
  <Scene key="root">
    <Scene key="listView"
      component={CardCollectionContainer}
      title="All Cards" />
    <Scene key="myCard"
      component={MyCardContainer}
      title="My Card" />
  </Scene>
);
