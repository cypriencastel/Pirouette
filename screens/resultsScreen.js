import React from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import axios from 'axios';
import globalVars from '../globalVars';
import ResultTicket from '../components/ResultTcket';


export default class ResultsScreen extends React.Component {
  constructor(props) {
    super(props);
    
    this.from = this.props.navigation.getParam('from');
    this.to = this.props.navigation.getParam('to');
    this.datetime = this.props.navigation.getParam('datetime');

    this.state = {
      isLoading: true
    };
    
  }

  componentWillMount() {
    this.fetchTickets();
  }

  async fetchTickets() {
    
    const tickets = await axios.post(`${globalVars.remoteApi}/fetchTickets`, {
      from: this.from,
      to: this.to,
      datetime: this.datetime
    })

    this.setState({
      isLoading: false,
      tickets: tickets.data
    })

    console.log(this.state);
    
    
  }

  render() {
    if (this.state.isLoading === true) {
      return (
        <ActivityIndicator />
      );
    }
    return (
      <FlatList
        data={this.state.tickets}
        keyExtractor={(item, index) => item.id}
        renderItem={({item}) => <ResultTicket navigation={this.props.navigation.getParam('navigation')} data={item} />}
      />
      // <ResultTicket navigation={this.props.navigation.getParam('navigation')} />
    );
  }
}