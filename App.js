import { CoinCard, CryptoContainer, Header } from './src/components';
import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { Provider } from 'react-redux';
import Store from './src/Store';

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <View>
          <CoinCard/>
        </View>
      </Provider>
    );
  }
}


