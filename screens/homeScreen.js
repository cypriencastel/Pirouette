import React from 'react';
import { View, Text, Button } from 'react-native';
import io from 'socket.io-client';
import globalVars from '../globalVars';
import PushNotification from 'react-native-push-notification';
import * as PushNotificationConf from '../utils/pushNotifConf'; 

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      txt: 'lalala'
    }
  }

  componentWillMount() {
    this.socket = io(`http://${globalVars.localIP}:3000`);

    this.socket.on('changeText', (e) => {
      this.setState({
        txt: 'trololol'
      })
    })
    this.socket.on('phone:btn1', (e) => {
      console.log('phone:btn1 socket received');
      this.setState({
        txt: 'btn1'
      })
    });
    this.socket.on('phone:btn2', (e) => {
      console.log('phone:btn2 socket received');
      this.setState({
        txt: 'btn2'
      })
    });
    this.socket.on('phone:btn3', (e) => {
      console.log('phone:btn3 socket received');
      this.setState({
        txt: 'btn3'
      })
    });
  }

  componentDidMount() {
    PushNotification.configure(PushNotificationConf);
    PushNotification.localNotificationSchedule({
      message: "My Notification Message", // (required)
      date: new Date(Date.now() + (5 * 1000)) // in 5 secs
    });
  }

  launchSockets() {

  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{this.state.txt}</Text>
        <Button title="launch socket" />
        <Button title="go to login" onPress={() => this.props.navigation.navigate('Login', { socket: this.socket })} />
      </View>
    );
  }
}