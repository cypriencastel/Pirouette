import { View, TextInput, Button } from 'react-native';
import PushNotification from 'react-native-push-notification';
import React from 'react';


export default class TestsPushScreen extends React.Component {
  constructor(props) {
    super(props);
    
    this.socket = this.props.navigation.getParam('socket');
  }
  
  handleTextChange(field, val) {
    this.setState({
      ...this.state,
      [field]: val
    });
  }

  componentDidMount() {
    this.socket.on('receiveMsg', (msg) => {
      PushNotification.localNotificationSchedule({
        message: msg,
        date: new Date(Date.now())
      })
    });
  }

  emitMsg() {
    this.socket.emit('emitMsg', this.state.txt)
  }

  render() {
    return (
      <View>
        <TextInput onChangeText={(txt) => this.handleTextChange('txt', txt)} />
        <Button title="go" onPress={() => this.emitMsg()} />
      </View>
    );
  }
}
