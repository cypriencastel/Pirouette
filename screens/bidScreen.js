import React from 'react';
import { View, Text } from 'react-native';

export default class BidScreen extends React.Component {
  static navigationOptions = {
    header: {
      display: 'none',
    }
  };

  render() {
    return (
      <View>
        <Text> Bid screen </Text>
      </View>
    );
  }
}