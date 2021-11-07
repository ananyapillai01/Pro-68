import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import inScreen from './inScreen';
import fbScreen from './fbScreen';

export default function App() {
  return (
      <AppContainer/>
  );
}

const TabNavigator = createBottomTabNavigator({
  Instagram: {screens: inScreen},
  Facebook: {screens: fbScreen}
})
const AppContainer = createAppContainer(TabNavigator);