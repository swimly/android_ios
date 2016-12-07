/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MainView from './assets/views/MainView';
class Project extends Component {
  render() {
    return (
      <MainView/>
    );
  }
}


AppRegistry.registerComponent('Project', () => Project);
