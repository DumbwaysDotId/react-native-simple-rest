import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'

const AppNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen
  },
  AboutScreen: {
    screen: AboutScreen
  },
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}