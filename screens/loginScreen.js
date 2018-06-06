import { View, Text, TextInput, Button, Alert, AsyncStorage } from 'react-native';
import React from 'react';
import axios from 'axios';
import globalVars from '../globalVars';


export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      userPassword: '',
      msg: 'no message'
    };

    this.socket = this.props.navigation.getParam('socket');
    
    // this.socket.on('phone:receive', (msg) => {
    //   this.setState({
    //     ...this.state,
    //     msg: 'received message'
    //   })
    // });

    this.socket.on('server:testroom', () => {
      console.log('test room ok');
      this.setState({
        ...this.state,
        msg: 'test room ok'
      });
    })
  }

  handleTextChange(field, val) {
    this.setState({
      ...this.state,
      [field]: val
    });
    
  }

  async handleLogin() {
    const req = await axios.post(`http://${globalVars.localIP}:3000/login`,
      {
        email: this.state.userEmail,
        password: this.state.userPassword
      }
    );
    
    const status = req.data.status;

    if (status === 'ok') {
      console.log('login ok');
      
      try {
        await AsyncStorage.setItem('userInfos', JSON.stringify(req.data.user));
      } catch (error) {
        console.error(error); 
      }

      return Alert.alert('login', 'login ok');
    }

    return Alert.alert('error', 'login nope');
  }

  sendSocket() {
    this.socket.emit('phone:send');
    
  }

  joinRoom() {
    this.socket.emit('phone:joinTestRoom')
  }

  render() {
    return (
      <View>
        <Text>Login Screen</Text>
        <Text>{this.state.msg}</Text>
        <TextInput onChangeText={(txt) => this.handleTextChange('userEmail', txt)} />
        <TextInput
          onChangeText={(txt) => this.handleTextChange('userPassword', txt)}
        />
        <Button title="send socket" onPress={() => this.sendSocket()} />
        <Button title="log user credentials" onPress={() => AsyncStorage.getItem('userInfos').then(e => console.log(e))} />
        <Button title="login" onPress={() => this.handleLogin()} />
        <Button title="join room" onPress={() => this.joinRoom()} />
      </View>
    );
  }
}