import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/homeScreen';
import LoginScreen from './screens/loginScreen';
import { StackNavigator } from 'react-navigation';


const App = StackNavigator({
  Home: { screen: HomeScreen },
  Login: { screen: LoginScreen }
});

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
