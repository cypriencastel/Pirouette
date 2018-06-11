import React from 'react';
import { View, Text } from 'react-native';
import ResultTicket from '../components/ResultTcket';


export default class ResultsScreen extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.navigation);
    
  }
  render() {
    return (
      <ResultTicket navigation={this.props.navigation.getParam('navigation')} />
    );
  }
}